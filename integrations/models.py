from argparse import Namespace
from django.db import models


class Dialog(models.Model):
    company = models.CharField(max_length=254, unique=True)
    color = models.CharField(max_length=50, null=True)
    api_key = models.CharField(max_length=1000)
    phone_number = models.CharField(max_length=25)
    active = models.BooleanField(default=True)
    namespace = models.CharField(max_length=250, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.company} - {self.phone_number}"
