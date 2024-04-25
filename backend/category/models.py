from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=1000)
    image_url = models.CharField(max_length=1500)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="categories", null=True, blank=True)
    
    
    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Description: {self.description}"
    
    
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = 'Categories'
        
        
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image_url': self.image_url
        }
    
    
class Product(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=1000)
    rating = models.CharField(max_length=50)
    image_url = models.CharField(max_length=1500)
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")
    price = models.FloatField()
    
    
    
    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Description: {self.description}, rating: {self.rating}, CategoryId: {self.categoryId}"
    
    
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        
        
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'rating': self.rating,
            'price': self.price,
            'image_url': self.image_url
            
        }