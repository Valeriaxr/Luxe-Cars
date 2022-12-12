from django.contrib import admin
from .models import Salesperson,Customer, Sales

# Register your models here.

# @admin.register(SalesPerson)
# class SalesPersonAdmin(admin.ModelAdmin):
#     pass

# @admin.register(Customer)
# class CustomerAdmin(admin.ModelAdmin):
#     pass

# @admin.register(Sales)
# class SalesAdmin(admin.ModelAdmin):
#     pass


admin.site.register(Salesperson)
admin.site.register(Customer)
admin.site.register(Sales)