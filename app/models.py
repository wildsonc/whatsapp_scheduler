from enum import unique
from django.db import models
from django.conf import settings
from django.db.models.deletion import CASCADE

import cryptocode


class EncryptedField(models.CharField):
    description = "Encrypted value"

    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 255
        kwargs['blank'] = True
        kwargs['null'] = True
        super().__init__(*args, **kwargs)

    def deconstruct(self):
        name, path, args, kwargs = super().deconstruct()
        del kwargs["max_length"]
        del kwargs["blank"]
        del kwargs["null"]
        return name, path, args, kwargs

    def get_prep_value(self, value):
        return cryptocode.encrypt(value, settings.SECRET_KEY)

    def from_db_value(self, value, expression, connection):
        if value is None:
            return value
        try:
            value = str(value.tobytes())
        except:
            pass
        return cryptocode.decrypt(value, settings.SECRET_KEY)

    def to_python(self, value):
        if isinstance(value, Setting):
            return value
        if value is None:
            return value
        return cryptocode.decrypt(value, settings.SECRET_KEY)


class Setting(models.Model):
    name = models.CharField(max_length=254, unique=True)
    value = models.CharField(max_length=1000)
    active = models.BooleanField(default=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.value

    class Meta:
        db_table = "settings"


class Database(models.Model):
    name = models.CharField(max_length=60, unique=True)
    host = models.CharField(max_length=254)
    database = models.CharField(max_length=254)
    user = models.CharField(max_length=254)
    password = EncryptedField()
    port = models.CharField(max_length=10)
    driver = models.CharField(max_length=20, default='postgres')
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    @property
    def uri_connection(self):
        return f"postgresql+psycopg2://{self.user}:{self.password}@{self.host}:{self.port}/{self.database}"

    @property
    def connection(self):
        return f"dbname={self.database} user={self.user} password={self.password} host={self.host} port={self.port}"

    class Meta:
        db_table = "databases"


class Query(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=254, null=True, blank=True)
    hsm = models.CharField(max_length=254, null=True, blank=True)
    once_time = models.BooleanField(default=False)
    task = models.CharField(max_length=254, null=True, blank=True)
    sql = models.TextField()
    database = models.ForeignKey(Database, on_delete=CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "queries"


class History(models.Model):
    phone = models.CharField(max_length=20)
    status = models.CharField(max_length=25)
    template = models.CharField(max_length=20)
    args = models.CharField(max_length=1024)
    sent_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "wa_history"
        ordering = ['-sent_at']


class Token(models.Model):
    name = models.CharField(max_length=254)
    token = models.CharField(max_length=254)
    expire_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "tokens"
        ordering = ['-expire_at']

    def __str__(self):
        return self.name


class MKUser(models.Model):
    name = models.CharField(max_length=254, unique=True)
    token = models.CharField(max_length=254)
    cd_servico = models.CharField(max_length=5)
    password = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "mk_users"

    def __str__(self):
        return self.name


class Template(models.Model):
    name = models.CharField(max_length=512, unique=True)
    header = models.CharField(max_length=250, null=True)
    header_args = models.IntegerField(default=0, null=True)
    header_type = models.CharField(max_length=20, null=True)
    body = models.CharField(max_length=1024, null=True)
    body_args = models.IntegerField(default=0, null=True)
    footer = models.CharField(max_length=250, null=True)
    buttons = models.CharField(max_length=250, null=True)
    buttons_args = models.IntegerField(default=0, null=True)

    class Meta:
        db_table = "dialog_templates"

    def __str__(self):
        return self.name


class Contact(models.Model):
    number = models.CharField(max_length=20, unique=True)
    wa_id = models.CharField(max_length=20, null=True)
    status = models.CharField(max_length=20)
    blacklist = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)
