from psycopg2.extras import RealDictCursor
from django.conf import settings
from celery import shared_task

from .exceptions import Blacklist, TaskDuplicated, WhatsappInvalid, HsmError
from .models import Query, Template, Contact, Dialog
from django_celery_results.models import TaskResult
from datetime import date
from .tasks import *

import psycopg2
import requests
import json

from io import StringIO
import contextlib
import sys

URL = 'https://waba.360dialog.io/v1'


@contextlib.contextmanager
def stdoutIO(stdout=None):
    old = sys.stdout
    if stdout is None:
        stdout = StringIO()
    sys.stdout = stdout
    yield stdout
    sys.stdout = old


@shared_task
def execute_query(query):
    q = Query.objects.get(id=query)
    results = None
    with psycopg2.connect(q.database.connection) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(q.sql)
            results = cursor.fetchall()
    if results:
        for result in results:
            _send_hsm.delay(q.hsm, result, q.task, q.once_time)
        return {"results": len(results)}
    else:
        return {"results": 0}


@shared_task
def _send_hsm(hsm, query, task, once_time):
    prevent_duplicate(hsm, query, task, once_time)
    template = Template.objects.filter(name=hsm).first()
    if not template:
        r = requests.get(
            f"{settings.DOMAIN}/api/templates/{query['company']}/{hsm}")
        if r.status_code == 200:
            r = r.json()
            template, created = Template.objects.get_or_create(name=hsm,
                                                               header_type=r.get(
                                                                   "header", {}).get("format"),
                                                               header_args=r.get(
                                                                   "header", {}).get("args"),
                                                               footer=r.get(
                                                                   "footer", {}).get("text"),
                                                               body=r["body"]["text"],
                                                               body_args=r["body"]["args"],
                                                               buttons=r.get(
                                                                   "buttons"),
                                                               buttons_args=r.get("buttons", {}).get("args"))
        else:
            raise Exception(f"Template ({hsm}) not found")
    company = Dialog.objects.filter(company=query['company']).first()
    if not company:
        raise Exception(f"Company ({query['company']}) not found")
    contact = get_contact(query['phone'], company)
    header_args = None
    if task:
        func = task.split('.')[-1]
        arg = query['task_args']
        with stdoutIO() as s:
            try:
                exec(f"{func}({arg})")
            except:
                raise Exception("Failed to execute task")
        header_args = json.loads(s.getvalue())
    body_args = None
    if query.get('body_args'):
        body_args = query['body_args']
    buttons_args = None
    if query.get('buttons_args'):
        buttons_args = query['buttons_args']
    data = get_context(contact.wa_id, template, company.namespace,
                       header_args, body_args, buttons_args)
    print(data)
    header = {"D360-Api-Key": company.api_key,
              'Content-Type': "application/json"}
    r = requests.post(f'{URL}/messages',
                      data=data, headers=header)
    if r.status_code != 201:
        raise HsmError(r.text)
    return r.json()


def prevent_duplicate(hsm, query, task, once_time):
    args = str(json.dumps(query)).replace('"', "\'")
    if task:
        task = f"'{task}'"
    else:
        task = 'None'
    args = f"\"('{hsm}', {args}, {task}, {once_time})\""
    if once_time:
        t = TaskResult.objects.filter(task_args=args, status="SUCCESS").first()
    else:
        t = TaskResult.objects.filter(
            task_args=args, status="SUCCESS", date_done__date=date.today()).first()
    if t:
        raise TaskDuplicated


def get_context(wa_id, template, namespace, header_args=None, body_args=None, buttons_args=None):
    components = []
    if template.header_args:
        components.append(header(template.header_type, header_args))
    if template.body_args:
        components.append(body(body_args))
    if template.buttons_args:
        components.append(buttons(buttons_args))
    data = {
        "to": wa_id,
        "type": "template",
        "template": {
            "namespace": namespace,
            "name": template.name,
            "language": {
                "policy": "deterministic",
                "code": "pt_BR"
            },
            "components": components
        }
    }
    return json.dumps(data)


def header(_type, kwargs: dict) -> dict:
    """
    Document => filename & link

    Image => link
    """
    if _type == 'DOCUMENT':
        parameters = {
            "type": "document",
            "document": {
                    "filename": kwargs['file_name'],
                    "link": kwargs['link']
            }
        }
    elif _type == 'IMAGE':
        parameters = {
            "type": "image",
            "image": {
                    "link": kwargs['link']
            }
        }
    elif _type == 'TEXT':
        parameters = {
            "type": "text",
            "text": kwargs['text']
        }
    elif _type == 'VIDEO':
        parameters = {
            "type": "video",
            "video": {
                "link": kwargs['link']
            }
        }
    data = {
        "type": "header",
        "parameters": [parameters]
    }
    return data


def body(args: list) -> dict:
    """ Array of params => {{1}} """
    parameters = []
    for arg in args:
        parameters.append({
            "type": "text",
            "text": arg
        })
    data = {
        "type": "body",
        "parameters": parameters
    }
    return data


def buttons(_type, kwargs):
    data = []
    i = 0
    for args in kwargs:
        if _type == 'url':
            button = {
                "type": "button",
                "sub_type": "url",
                "index": f"{str(i)}",
                "parameters": [
                        {
                            "type": "text",
                            "text": args['text']
                        }
                ]
            }
            data.append(button)
            i += 1
    return data


def get_contact(phone, company):

    try:
        contact = Contact.objects.get(number=phone)
        if contact.status == 'valid':
            if contact.blacklist:
                raise Blacklist(phone)
            return contact
        else:
            raise WhatsappInvalid(phone)
    except Contact.DoesNotExist:
        data = json.dumps({
            "blocking": "wait",
            "force_check": True,
            "contacts": [
                f"+55{phone}"
            ]
        })
        header = {"D360-Api-Key": company.api_key,
                  'Content-Type': "application/json"}
        r = requests.post(f'{URL}/contacts',
                          data=data, headers=header)
        r = r.json()['contacts'][0]
        contact = Contact.objects.get_or_create(
            number=phone, status=r['status'], wa_id=r.get('wa_id'))
        if r['status'] == 'valid':
            return contact
        else:
            raise WhatsappInvalid(phone)


def new_contact(phone):
    company = Dialog.objects.first()
    data = json.dumps({
        "blocking": "wait",
        "force_check": True,
        "contacts": [
            f"+55{phone}"
        ]
    })
    header = {"D360-Api-Key": company.api_key,
              'Content-Type': "application/json"}
    r = requests.post(f'{URL}/contacts',
                      data=data, headers=header)
    r = r.json()['contacts'][0]
    contact = Contact.objects.get_or_create(
        number=phone, status=r['status'], wa_id=r.get('wa_id'))
    return contact
