from rest_framework import serializers
from .models import Dialog


class DialogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dialog
        fields = '__all__'

    def create(self, validated_data):
        return Dialog.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.company = validated_data.get('company', instance.company)
        instance.color = validated_data.get('color', instance.color)
        instance.api_key = validated_data.get('api_key', instance.api_key)
        instance.phone_number = validated_data.get(
            'phone_number', instance.phone_number)
        instance.active = validated_data.get('active', instance.active)
        instance.namespace = validated_data.get(
            'namespace', instance.namespace)
        instance.save()
        return instance
