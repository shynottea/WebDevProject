from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from category.models import Category, Product
from rest_framework import status
from category.serializers import CategorySerializer, ProductSerializer
from rest_framework.response import Response

@api_view(["GET", "POST"])
def category_list(request):
    if request.method == "GET":
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many = True)
        return Response(serializer.data, safe = False)
    elif request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
@api_view(["GET", "PUT", "DELETE"])
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as c:
        return JsonResponse({"error": str(c)}, status=400)
    
    if request.method == "GET":
        serializer = CategorySerializer(category)
        return Response(serializer.data) 
    elif request.method == "PUT":
        serializer = CategorySerializer(
            instance=category,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == "DELETE":
        category.delete()
        return Response({"deleted": True})
    

@api_view(["GET", "POST"])
def product_list(request):
    if request.method == "GET":
        products = Product.objects.all()
        serializer = ProductSerializer(products, many = True)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == "POST":
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        

@api_view(["GET", "PUT", "DELETE"])
def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as c:
        return JsonResponse({"error": str(c)}, status=400)
    
    if request.method == "GET":
        serializer = ProductSerializer(product)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
       serializer = ProductSerializer(
            instance=product,
            data=request.data
        )
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data)  
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    elif request.method == "DELETE":
        product.delete()
        return Response({"deleted": True})    
    
    

def company_vacancies(request, category_id):
    try:
        products = Product.objects.all().filter(categoryId = category_id)
        products_json = [v.to_json() for v in products]
    except Category.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status = 400)
    return JsonResponse(products_json, safe = False)


    