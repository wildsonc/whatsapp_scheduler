from django_celery_beat.models import PeriodicTask
from rest_framework import serializers
from .models import Database, Query, Contact


class CrontabSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    minute = serializers.CharField(max_length=240)
    hour = serializers.CharField(max_length=96)
    day_of_week = serializers.CharField(max_length=64)
    day_of_month = serializers.CharField(max_length=124)
    month_of_year = serializers.CharField(max_length=64)
    timezone = serializers.CharField(max_length=63)


class PeriodicSerializer(serializers.ModelSerializer):
    crontab = CrontabSerializer()

    class Meta:
        model = PeriodicTask
        fields = '__all__'


class DatabaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Database
        fields = '__all__'

    def create(self, validated_data):
        return Database.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.host = validated_data.get('host', instance.host)
        instance.name = validated_data.get('name', instance.name)
        instance.database = validated_data.get('database', instance.database)
        instance.user = validated_data.get('user', instance.user)
        instance.port = validated_data.get('port', instance.port)
        instance.password = validated_data.get('password', instance.password)
        instance.save()
        return instance


class DatabaseSerializerList(serializers.ModelSerializer):
    class Meta:
        model = Database
        exclude = ['password']


class QuerySerializer(serializers.ModelSerializer):
    database = DatabaseSerializer()

    class Meta:
        model = Query
        fields = '__all__'


class QuerySerializerDetail(serializers.ModelSerializer):
    class Meta:
        model = Query
        fields = ['database', 'name', 'description',
                  'sql', 'hsm', 'task', 'once_time']

    def create(self, validated_data):
        return Query.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.sql = validated_data.get('sql', instance.sql)
        instance.database = validated_data.get('database', instance.database)
        instance.hsm = validated_data.get('hsm', instance.hsm)
        instance.once_time = validated_data.get(
            'once_time', instance.once_time)
        instance.save()
        return instance


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'number']
