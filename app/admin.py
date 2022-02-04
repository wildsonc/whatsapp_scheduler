from django.contrib import admin
from .models import MKUser


@admin.register(MKUser)
class Users(admin.ModelAdmin):
    pass
