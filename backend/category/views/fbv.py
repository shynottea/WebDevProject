from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from category.models import Category, Product
from category.serializers import CategorySerializer, ProductSerializer
import json

@csrf_exempt
def category_list(request):
    if request.method == "GET":
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many = True)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CategorySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
        
        
@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as c:
        return JsonResponse({"error": str(c)}, status=400)
    
    if request.method == "GET":
        serializer = CategorySerializer(category)
        return JsonResponse(serializer.data) 
    elif request.method == "PUT":
        data = json.loads(request.body)
        category.city = data.get("city")
        category.save()
        return JsonResponse(category.to_json())
    elif request.method == "DELETE":
        category.delete()
        return JsonResponse({"deleted": True})
    

@csrf_exempt
def product_list(request):
    if request.method == "GET":
        products = Product.objects.all()
        serializer = ProductSerializer(products, many = True)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == "POST":
        data = json.loads(request.body)
        product = Product.objects.create(name=data.get("name"), description=data.get("description"), rating=data.get("rating"))
        return JsonResponse(product.to_json(), status=201)


@csrf_exempt
def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as c:
        return JsonResponse({"error": str(c)}, status=400)
    
    if request.method == "GET":
        serializer = ProductSerializer(product)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        product.name = data.get("name")
        product.save()
    elif request.method == "DELETE":
        product.delete()
        return JsonResponse({"deleted": True})    
    
    
@csrf_exempt
def category_products(request, category_id):
    try:
        products = Product.objects.all().filter(categoryId = category_id)
        products_json = [v.to_json() for v in products]
    except Category.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status = 400)
    return JsonResponse(products_json, safe = False)


    