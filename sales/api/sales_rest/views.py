from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .encoders import CustomerListEncoder, SalespersonListEncoder, SalesListEncoder
from .models import Customer, Salesperson, Sales, AutomobileVO
import json



@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder = CustomerListEncoder,
            safe = False,
        )
    else:
        try: #POST
            content = json.loads(request.body)
            customers = Customer.objects.create(**content)
            print(customers)
            return JsonResponse(
                customers,
                encoder = CustomerListEncoder,
                safe = False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the customer"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def customer_lists(request,pk):
    if request.method == "GET":
        try:
            customers = Customer.objects.get(id=pk)
            return JsonResponse(
                customers,
                encoder = CustomerListEncoder,
                safe = False
            )
        except Customer.DoesNotExist:
            return JsonResponse({"Message": "Does not exist"})
    elif request.method == "DELETE":
        try:
            customers = Customer.objects.get(id =pk)
            customers.delete()
            return JsonResponse(
                customers,
                encoder = CustomerListEncoder,
                safe = False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Can't delete"})
    else:
        try: #PUT
            content = json.loads(request.body)
            customers = Customer.objects.get(id = pk)

            props = ["customer_name", "customer_address","customer_phone_number"]
            for prop in props:
                if prop in content:
                    setattr(customers, prop, content[prop])
            customers.save()
            return JsonResponse(
                customers,
                encoder = CustomerListEncoder,
                safe = False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

@require_http_methods(["GET", "POST"])
def sales_person_list(request):
    if request.method == "GET":
        sales_person = Salesperson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder = SalespersonListEncoder,
            safe = False,
        )
    else:
        try: #POST
            content = json.loads(request.body)
            sales_persons = Salesperson.objects.create(**content)
            return JsonResponse(
                sales_persons,
                encoder = SalespersonListEncoder,
                safe = False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the sales person"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def sales_person_lists(request, pk):
    if request.method == "GET":
        try:
            sales_persons = Salesperson.objects.get(id = pk)
            return JsonResponse(
                sales_persons,
                encoder = SalespersonListEncoder,
                safe = False
            )
        except Salesperson.DoesNotExist:
            return JsonResponse({"Message": "Does not exist"})
    elif request.method == "DELETE":
        try:
            sales_persons = Salesperson.objects.get(id = pk)
            sales_persons.delete()
            return JsonResponse(
                sales_persons,
                encoder = SalespersonListEncoder,
                safe = False
            )
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            sales_persons = Salesperson.objects.get(id =pk)

            props = ["sales_name", "employee_number"]
            for prop in props:
                if prop in content:
                    setattr(sales_persons, prop, content[prop])
            sales_persons.save()
            return JsonResponse(
                sales_persons,
                encoder = SalespersonListEncoder,
                safe = False
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

@require_http_methods(["GET", "POST"])
def sales_list(request):
    if request.method == "GET":
        sales = Sales.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder = SalesListEncoder,
            safe = False
        )
    # else: Couldn't get the POST to work and tried moving on to react for the forms

    #     content = json.loads(request.body)
    #     print(content)
    #     try:
    #         automobile = AutomobileVO.objects.get(vin = content["automobile"])
    #         content["automobile"] = automobile

    #         sales_person = Salesperson.objects.get(id = content["sales_person"])
    #         content["sales_person"] = sales_person



    #     except  AutomobileVO.DoesNotExist:
    #         return JsonResponse(
    #             {"message": "invalid automobile id"},
    #             status = 400,
    #             )
    # sale = Sales.objects.create(**content)
    # return JsonResponse(
    #     sale,
    #     encoder = SalesListEncoder,
    #     safe = False
    # )
