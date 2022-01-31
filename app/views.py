from .serializers import DatabaseSerializer, QuerySerializer, QuerySerializerDetail, DatabaseSerializerList
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from psycopg2.extras import RealDictCursor

from django_celery_beat.models import CrontabSchedule, PeriodicTask
from celery import shared_task, current_app

from .models import Database, Query

import time
import psycopg2


@api_view(['POST', 'GET'])
@csrf_exempt
def database(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DatabaseSerializer(data=data)
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
        data = JSONParser().parse(request)
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


@api_view(['POST', 'GET'])
@csrf_exempt
def query(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = QuerySerializerDetail(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'GET':
        query = Query.objects.all()
        serializer = QuerySerializer(query, many=True, context={'request': request})
        return JsonResponse(serializer.data, safe=False)


@api_view(['DELETE', 'PUT', 'GET'])
@csrf_exempt
def query_detail(request, pk):
    try:
        query = Query.objects.get(pk=pk)
    except Query.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'PUT':
        data = JSONParser().parse(request)
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


@shared_task()
def default(query, database):
    lazy.delay()


def celery_tasks():
    tasks = list(sorted(name for name in current_app.tasks
                        if not name.startswith('celery.')))
    return tasks


@shared_task()
def lazy():
    print("Sleeping")
    time.sleep(20)


@api_view(['GET'])
@csrf_exempt
def trigger(request):
    lazy.delay()
    return HttpResponse()


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
