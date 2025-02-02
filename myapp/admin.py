from django.contrib import admin
from .models import Item  # Explicit import

# Register your models here.
admin.site.register(Item)
