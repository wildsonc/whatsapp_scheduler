from django.urls import path
from . import views


urlpatterns = [
    path('database', views.database, name='database'),
    path('database/<int:pk>', views.database_detail, name='database_detail'),
    path('query', views.query, name='query'),
    path('query/<int:pk>', views.query_detail, name='query_detail'),
    path('trigger', views.trigger, name='trigger'),
]
