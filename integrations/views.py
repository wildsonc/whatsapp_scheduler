from tempfile import template
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .serializers import DialogSerializer
from rest_framework.parsers import JSONParser

from .models import Dialog
import requests
import json

URL = "https://waba.360dialog.io/v1/"


@api_view(['POST', 'GET'])
@csrf_exempt
def dialog(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
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
        data = JSONParser().parse(request)
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
