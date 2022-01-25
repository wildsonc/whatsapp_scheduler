from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .serializers import DatabaseSerializer, QuerySerializer, QuerySerializerDetail
from psycopg2.extras import RealDictCursor
from rest_framework.parsers import JSONParser

from .models import Database, Query


@api_view(['POST', 'GET'])
@csrf_exempt
def database(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DatabaseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'GET':
        database = Database.objects.all()
        serializer = DatabaseSerializer(database, many=True)
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
        serializer = DatabaseSerializer(database)
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
