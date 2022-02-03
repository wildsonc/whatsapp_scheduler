from .serializers import DatabaseSerializer, QuerySerializer, QuerySerializerDetail, DatabaseSerializerList
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from psycopg2.extras import RealDictCursor

from django_celery_beat.models import CrontabSchedule, PeriodicTask
from celery import shared_task, current_app

from .models import Database, Query

import psycopg2
import PyPDF2
import os


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


@api_view(['POST'])
@csrf_exempt
def run(request):
    data = request.data
    return JsonResponse(execute(data['query'], data['database'], True), safe=False)


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
                        if not name.startswith('celery.')))
    return JsonResponse({"functions": tasks})


@api_view(['GET'])
@csrf_exempt
def trigger(request):
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


@shared_task
def encrypt_pdf(path, password) -> str:
    pdfFile = open(path, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFile)
    pdfWriter = PyPDF2.PdfFileWriter()
    for pageNum in range(pdfReader.numPages):
        pdfWriter.addPage(pdfReader.getPage(pageNum))
    pdfWriter.encrypt(password)
    newPath = path.replace('-pass.', '.')
    resultPdf = open(newPath, 'wb')
    pdfWriter.write(resultPdf)
    resultPdf.close()
    os.remove(path)
    return newPath.split('/')[-1]
