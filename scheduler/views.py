from django.shortcuts import HttpResponse
from core.celery import debug_task_delay

# Create your views here.
def delay(request):
    debug_task_delay.delay()
    return HttpResponse()