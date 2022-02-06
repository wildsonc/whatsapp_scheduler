from django.conf.urls.static import static
from django.conf import settings
from django.urls import path
from . import views


urlpatterns = [
    path('database', views.database, name='database'),
    path('database-test', views.database_test, name='database_test'),
    path('database/<int:pk>', views.database_detail, name='database_detail'),
    path('query', views.query, name='query'),
    path('query/<int:pk>', views.query_detail, name='query_detail'),
    path('blacklist', views.blacklist, name='blacklist'),
    path('blacklist/<str:phone>', views.blacklist, name='blacklist'),
    path('trigger', views.trigger, name='trigger'),
    path('run', views.run, name='run'),
    path('tasks', views.functions, name='tasks'),
    path('periodic', views.periodic, name='periodic'),
    path('periodic/<int:id>', views.periodic, name='periodic'),
    path('periodic-state', views.periodic_state, name='periodic_state'),
    path('templates/<str:company>', views.list_templates, name='list_templates'),
    path('templates/<str:company>/<str:name>',
         views.get_template, name='get_template'),
    path('dialog', views.dialog, name='dialog'),
    path('dialog/<int:pk>', views.dialog_detail, name='dialog_detail'),
    path('download/<str:file>', views.download, name='download'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
