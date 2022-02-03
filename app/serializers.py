from rest_framework import serializers
from .models import Database, Query


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
        fields = ['database', 'name', 'description', 'sql', 'hsm', 'task']

    def create(self, validated_data):
        return Query.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.sql = validated_data.get('sql', instance.sql)
        instance.database = validated_data.get('database', instance.database)
        instance.save()
        return instance
