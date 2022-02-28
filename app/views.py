from .serializers import (DatabaseSerializer,
                          QuerySerializer,
                          QuerySerializerDetail,
                          DatabaseSerializerList,
                          ContactSerializer,
                          DialogSerializer,
                          PeriodicSerializer)
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from psycopg2.extras import RealDictCursor
from django.conf import settings

from django_celery_beat.models import CrontabSchedule, PeriodicTask, PeriodicTasks
from django_celery_results.models import TaskResult
from datetime import date, timedelta
from celery import current_app

from .models import Database, Query, Contact, Dialog
from .utils import new_contact
from .tasks import *
from .utils import *

import psycopg2
import mimetypes
import json

URL = "https://waba.360dialog.io/v1/"


@api_view(['POST', 'GET'])
@csrf_exempt
def database(request):
    if request.method == 'POST':
        serializer = DatabaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        try:
            print(serializer.data)
            Database.objects.get(name=serializer.data['name'])
            return JsonResponse({"status": "Error", "message": "This database name already exist!"})
        except Database.DoesNotExist:
            pass
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'GET':
        database = Database.objects.all()
        serializer = DatabaseSerializerList(database, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['DELETE', 'PUT', 'GET'])
@csrf_exempt
def database_detail(request, pk):
    try:
        database = Database.objects.get(pk=pk)
    except Database.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'PUT':
        data = request.data
        serializer = DatabaseSerializer(database, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    if request.method == 'GET':
        serializer = DatabaseSerializerList(database)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'DELETE':
        database.delete()
        return HttpResponse(status=204)


@api_view(['POST'])
@csrf_exempt
def database_test(request):
    data = request.data
    DB = f"dbname={data['database']} \
        user={data['user']} \
        password={data['password']} \
        host={data['host']} \
        port={data['port']}"
    try:
        psycopg2.connect(DB)
        return JsonResponse({"status": "OK"})
    except psycopg2.OperationalError as e:
        return JsonResponse({"status": "Error", "message": str(e)})


@api_view(['POST', 'GET', 'PUT', 'DELETE'])
@csrf_exempt
def periodic(request, id=None):
    if request.method == 'POST':
        d = request.data
        c = d['crontab']
        cron, created = CrontabSchedule.objects.get_or_create(minute=c['minute'],
                                                              hour=c['hour'],
                                                              day_of_week=c['day_of_week'],
                                                              day_of_month=c['day_of_month'],
                                                              month_of_year=c['month_of_year'],
                                                              timezone=c['timezone'])
        kwargs = json.dumps({"query": d['query']})
        PeriodicTask.objects.create(crontab=cron,
                                    name=d['name'],
                                    task=d['task'],
                                    start_time=d['start_time'] if d['start_time'] != '' else None,
                                    one_off=d['one_off'],
                                    kwargs=kwargs)
        return HttpResponse()

    elif request.method == 'GET':
        tasks = PeriodicTask.objects.all()
        serializer = PeriodicSerializer(tasks, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'PUT':
        d = request.data
        c = d['crontab']
        cron, created = CrontabSchedule.objects.get_or_create(minute=c['minute'],
                                                              hour=c['hour'],
                                                              day_of_week=c['day_of_week'],
                                                              day_of_month=c['day_of_month'],
                                                              month_of_year=c['month_of_year'],
                                                              timezone=c['timezone'])
        kwargs = json.dumps({"query": d['query']})
        PeriodicTask.objects.filter(id=id).update(crontab=cron,
                                                  name=d['name'],
                                                  task=d['task'],
                                                  start_time=d['start_time'] if d['start_time'] != '' else None,
                                                  one_off=d['one_off'],
                                                  kwargs=kwargs)
        PeriodicTasks.update_changed()  # update celery beat in runtime
        return HttpResponse()

    elif request.method == 'DELETE':
        PeriodicTask.objects.filter(id=id).delete()
        return HttpResponse(status=204)


@api_view(['PUT'])
@csrf_exempt
def periodic_state(request):
    active = request.data['active']
    id = request.data['id']
    PeriodicTask.objects.filter(pk=id).update(enabled=active)
    PeriodicTasks.update_changed()  # update celery beat in runtime
    return HttpResponse()


@api_view(['POST', 'GET', 'DELETE'])
@csrf_exempt
def blacklist(request, phone=None):
    if request.method == "GET":
        contacts = Contact.objects.filter(blacklist=True).all()
        serializer = ContactSerializer(contacts, many=True)
        return JsonResponse(serializer.data, safe=False)

    if request.method == "DELETE":
        contact = Contact.objects.get(number=phone)
        contact.blacklist = False
        contact.save()
        return HttpResponse(status=204)

    if request.method == "POST":
        print(phone)
        try:
            contact = Contact.objects.get(number=phone)
            contact.blacklist = True
            contact.save()
            return HttpResponse(status=201)

        except Contact.DoesNotExist:
            contact = new_contact(phone)
            contact.blacklist = True
            contact.save()
            return HttpResponse()


@api_view(['POST', 'GET'])
@csrf_exempt
def query(request):
    if request.method == 'POST':
        data = request.data
        print(data)
        serializer = QuerySerializerDetail(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'GET':
        query = Query.objects.all()
        serializer = QuerySerializer(
            query, many=True, context={'request': request})
        return JsonResponse(serializer.data, safe=False)


@api_view(['DELETE', 'PUT', 'GET'])
@csrf_exempt
def query_detail(request, pk):
    try:
        query = Query.objects.get(pk=pk)
    except Query.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'PUT':
        data = request.data
        serializer = QuerySerializerDetail(query, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    if request.method == 'GET':
        serializer = QuerySerializer(query)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'DELETE':
        query.delete()
        return HttpResponse(status=204)


@api_view(['POST'])
@csrf_exempt
def run(request):
    data = request.data
    r = execute(data['query'], data['database'], True)
    return JsonResponse(r, safe=False)


def execute(query: str, db, test=False, many=True):
    _db = Database.objects.get(id=db)
    with psycopg2.connect(_db.connection) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            if test:
                query += ' limit 10'
            try:
                cursor.execute(query)
            except Exception as e:
                return {"status": "Erro", "message": str(e)}
            if many:
                return cursor.fetchall()
            else:
                return cursor.fetchone()


@api_view(['GET'])
@csrf_exempt
def functions(request):
    tasks = list(sorted(name for name in current_app.tasks
                        if not name.startswith('celery.') and not name.split('.')[-1].startswith('_')))
    return JsonResponse({"data": tasks})


@csrf_exempt
def download(request, file):
    filepath = f'{settings.BASE_DIR}/download/{file}'
    path = open(filepath, 'rb')
    mime_type, _ = mimetypes.guess_type(filepath)
    response = HttpResponse(path, content_type=mime_type)
    response['Content-Disposition'] = f"attachment; filename={file}"
    return response


@api_view(['GET'])
@csrf_exempt
def trigger(request):
    execute_query.delay(request.query_params.get('id'))
    return HttpResponse()


@api_view(['POST', 'GET'])
@csrf_exempt
def dialog(request):
    if request.method == 'POST':
        data = request.data
        serializer = DialogSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'GET':
        database = Dialog.objects.all()
        serializer = DialogSerializer(database, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['DELETE', 'PUT', 'GET'])
@csrf_exempt
def dialog_detail(request, pk):
    try:
        database = Dialog.objects.get(pk=pk)
    except Dialog.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'PUT':
        data = request.data
        serializer = DialogSerializer(database, data=data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    if request.method == 'GET':
        serializer = DialogSerializer(database)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'DELETE':
        database.delete()
        return HttpResponse(status=204)


@api_view(['GET'])
@csrf_exempt
def list_templates(request, company):
    try:
        q = Dialog.objects.get(company=company)
    except Dialog.DoesNotExist:
        return JsonResponse({"message": "Company not found"}, status=404)
    headers = {"D360-Api-Key": q.api_key, 'Content-Type': "application/json"}
    data = requests.get(f"{URL}/configs/templates", headers=headers).json()
    templates = []
    for template in data['waba_templates']:
        if template['status'] == 'approved':
            templates.append(template['name'])
    return JsonResponse({"templates": templates})


@api_view(['GET'])
@csrf_exempt
def get_template(request, company, name):
    try:
        q = Dialog.objects.get(company=company)
    except Dialog.DoesNotExist:
        return JsonResponse({"message": "Company not found"}, status=404)
    headers = {"D360-Api-Key": q.api_key, 'Content-Type': "application/json"}
    data = requests.get(f"{URL}/configs/templates", headers=headers).json()
    for template in data['waba_templates']:
        if template['name'] == name:
            parsed = parser_template(template)
    return JsonResponse(parsed)


def parser_template(template):
    result = {}
    for component in template['components']:
        if component['type'] == 'BODY':
            result['body'] = {}
            result['body']['text'] = component['text']
            try:
                result['body']['args'] = len(
                    result['body']['text'].split('{{')) - 1
            except:
                result['body_args'] = 0
        elif component['type'] == 'FOOTER':
            result['footer'] = component
        elif component['type'] == 'HEADER':
            result['header'] = component
            try:
                result['header']['args'] = len(
                    component['example']['header_handle'])
            except:
                result['header']['args'] = 0
        elif component['type'] == 'BUTTONS':
            buttons = []
            args = 0
            for button in component['buttons']:
                data = {"type": button['type'],
                        "text": button['text'],
                        'variable': 0}
                if 'example' in button:
                    data['variable'] = 1
                    args += 1
                buttons.append(data)
            if buttons:
                result['buttons'] = {}
                result['buttons']['data'] = buttons
                result['buttons']['args'] = args
    return result


@api_view(['GET'])
@csrf_exempt
def get_result(request):
    filter = request.query_params.getlist('filter')
    phone = request.query_params.get('phone')
    dt = request.query_params.get('phone')
    if not phone:
        return JsonResponse({"status": "Error: Phone is required"}, status=400)
    phone = phone[-8:]
    result = TaskResult.objects.filter(task_args__icontains=phone).all()
    if dt == 'today':
        result = result.filter(date_done__date=date.today())
    if filter:
        for f in filter:
            result = result.filter(task_args__icontains=f)
    if not result:
        return HttpResponse(status=404)
    results = []
    for r in result:
        data = {}
        task = eval(eval(r.task_args))
        data['template'] = task[0]
        _date = r.date_done - timedelta(hours=3)
        data['formated_date'] = _date.strftime("%d/%m %H:%M")
        data['date'] = r.date_done
        args = task[1]['body_args']
        data['body_args'] = args
        i = 1
        for arg in args:
            data[f'arg{i}'] = arg
            i += 1
        data['result'] = json.loads(r.result)
        results.append(data)
    if len(results) == 1:
        results = data
    return JsonResponse(results, safe=False)


@api_view(['GET'])
@csrf_exempt
def callback(request):
    phone = request.query_params.get('phone')
