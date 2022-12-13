from django.urls import path
from .views import customer_list, customer_lists, sales_person_list, sales_person_lists, sales_list

urlpatterns = [
    path("customer/", customer_list, name="customer_list"),
    path("customer/<int:pk>",customer_lists, name = "customer_lists"),
    path("sales_person_list/", sales_person_list, name = "sales_person_list"),
    path("sales_person_lists/<int:pk>", sales_person_lists, name = "sales_person_lists" ),
    path("sales_list/", sales_list, name = "sales_list")
]