# Generated by Django 5.0.4 on 2024-04-24 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0004_remove_product_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
    ]
