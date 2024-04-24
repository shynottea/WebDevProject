from rest_framework import serializers
from category.models import Category, Product


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    
    def create(self, validated_data):
        instance = Category(
            name=validated_data.get('name'),
            description=validated_data.get('description'))
        instance.save()
        return instance
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance
    
    
class CategorySerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    
    class Meta:
        model = Category
        fields = ("id", "name", "description",)
        
        
        
class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    rating = serializers.CharField()
    price = serializers.FloatField()
    
    
    def create(self, validated_data):
        instance = Product(
            name=validated_data.get('name'),
            description=validated_data.get('description'),
            rating=validated_data.get('rating'),
            price=validated_data.get('price'),
            image_url=validated_data.get('image_url')
        )
        
        instance.save()
        return instance
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance
    
    
class ProductSerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    rating = serializers.CharField()
    image_url = serializers.CharField(max_length=1500)
    price = serializers.FloatField()
    
    class Meta:
        model = Product
        fields = ("id", "name", "description", "rating", "image_url", "price", "categoryId")
    