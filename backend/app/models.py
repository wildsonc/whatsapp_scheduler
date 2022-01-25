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
        return cryptocode.decrypt(str(value.tobytes()), settings.SECRET_KEY)

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
    name = models.CharField(max_length=60)
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
