from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.views.static import serve
from django.urls import path, include
from django.urls.conf import re_path
from django.conf import settings
from django.contrib import admin


def home(request, *args, **kwargs):
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('login', request.path))
    return render(request, 'index.html')


def login_page(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(request.POST.get('next'))
        else:
            pass
    return render(request, 'login.html')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),
    path('login', login_page),
    path('', home),
    path('databases', home),
    path('company', home),
    path('queries', home),
    path('query/new', home),
    path('query/<str:pk>', home),
    path('tasks', home),
    path('blacklist', home),
    re_path(r'^static/(?P<path>.*)$', serve,
            {'document_root': settings.STATIC_ROOT}),
    re_path(r'^download/(?P<path>.*)$', serve,
            {'document_root': settings.MEDIA_ROOT}),
]
