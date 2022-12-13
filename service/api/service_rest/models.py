from django.db import models
from django.urls import reverse



class AutomobileVO(models.Model):
    color = models.CharField(max_length=50, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    model = models.CharField(max_length=50, null=True)
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return f"{self.model}, {self.color}"




class Technician(models.Model):
    name = models.CharField(max_length = 50)
    employee_num = models.PositiveIntegerField(null=True, unique=True)

def get_api_url(self):
    return reverse("api_list_technician", kwargs={"pk": self.id})






class ServiceAppt(models.Model):
    VIN = models.CharField(max_length=30)
    customer = models.CharField(max_length=50)
    date_time = models.CharField(max_length=50)
    reason_appt = models.CharField(max_length = 50)
    vip = models.BooleanField(default=False)


    technician = models.ForeignKey(
        Technician,
        related_name = "technician_name",
        on_delete=models.CASCADE,
    )


    def get_api_url(self):
        return reverse("api_list_appointment", kwargs={"pk": self.id})
