from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from category.models import Category, Product
from category.serializers import CategorySerializer, CategorySerializer2, ProductSerializer, ProductSerializer2


class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()  
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailAPIView(APIView):
    def get_object(self, category_id):
        try:
            category = Category.objects.get(id=category_id)
            return category
        except Category.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    

    def put(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(
            instance=category,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()  # update table ...
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    

    def delete(self, request, category_id):
        category = self.get_object(category_id)
        category.delete()
        return Response({"deleted": True})
    

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer2(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class ProductDetailAPIView(APIView):
    def get_object(self, product_id):
        try:
            product = Product.objects.get(id=product_id)
            return product
        except Product.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer(
            instance=product,
            data=request.data
        )
        
        if serializer.is_valid():
            serializer.save()  # update table ...
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, product_id):
        product = self.get_object(product_id)
        product.delete()
        return Response({"deleted": True})
