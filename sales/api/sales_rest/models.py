from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.model_name

    def get_api_url(self):
        return reverse("sales_list", kwargs={"pk": self.id})


class Salesperson(models.Model):
    sales_name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField()

    def get_api_url(self):
        return reverse("sales_person_lists", kwargs={"pk": self.pk})


class Customer(models.Model):
    customer_name = models.CharField(max_length=200)
    customer_address = models.CharField(max_length=200)
    customer_phone_number = models.CharField(max_length=12)

    def __str__(self):
        return self.model_name

    def get_api_url(self):
        return reverse("customer_lists", kwargs={"pk": self.pk})


class Sales(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name= "sales",
        on_delete = models.CASCADE
    )
    sales_person = models.ForeignKey(
        Salesperson,
        related_name= "SalesPerson",
        on_delete = models.CASCADE
    )
    customer = models.ForeignKey(
        Customer,
        related_name = "Customer",
        on_delete = models.CASCADE
    )
    price = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.model_name
