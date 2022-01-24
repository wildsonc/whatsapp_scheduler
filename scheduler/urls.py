from django.urls import path
from . import views

urlpatterns = [
    path('delay', views.delay, name="delay")
]
