from django.urls import path
from . import views


urlpatterns = [
    path('templates/<str:company>', views.list_templates, name='list_templates'),
    path('templates/<str:company>/<str:name>', views.get_template, name='get_template'),
    path('dialog', views.dialog, name='dialog'),
    path('dialog/<int:pk>', views.dialog_detail, name='dialog_detail'),
]
