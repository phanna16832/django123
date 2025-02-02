from django.db import models

# Create your models here.
class Item(models.Model):  # Renamed to PascalCase
    name = models.CharField(max_length=400)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Fixed argument name and max_digits

    def __str__(self):
        return self.name
