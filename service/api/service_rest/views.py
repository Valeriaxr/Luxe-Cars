from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from .models import AutomobileVO, Technician, ServiceAppt
from .models import AutomobileVO, ServiceAppt, Technician
from .encoders import ApptDetailEncoder, TechnicianEncoder







@require_http_methods(["GET", "POST"])
def api_list_appointment(request):
    if request.method == "GET":
        appointment = ServiceAppt.objects.all()
        return JsonResponse(
            {"appointment": appointment},
            encoder=ApptDetailEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.get(id=content["technician"])
        content["technician"] = technician
    try:

        obtain_vin =content["VIN"]
        AutomobileVO.objects.get(vin=obtain_vin)

        content["vip"] = True
    except AutomobileVO.DoesNotExist:
        content["vip"] = False

        appointment = ServiceAppt.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder = ApptDetailEncoder,
            safe = False
        )





@require_http_methods(["DELETE","GET", "PUT"])
def api_show_appointment(request, id):
    if request.method == "GET":
        try:


            appointments = ServiceAppt.objects.get(id=id)
            return JsonResponse(
                appointments,
                encoder=ApptDetailEncoder,
                safe=False,
            )

        except ServiceAppt.DoesNotExist:
            return JsonResponse({"Message": "Does not exist"})

    elif request.method == "DELETE":
        try:

            appointments = ServiceAppt.objects.get(id=id)
            appointments.delete()
            return JsonResponse(
                appointments,
                encoder = ApptDetailEncoder,
                safe = False,
                )
        except ServiceAppt.DoesNotExist:
                return JsonResponse({"Message": "Can not delete"})

    else:
        try:
                content = json.loads(request.body)
                appointments = ServiceAppt.objects.get(id=id)
                props = ["customer", "technician", "date_time", "reason_appt", "vip" ]
                for prop in props:
                    if prop in content:
                        setattr(appointments, prop, content[prop])
                appointments.save()
                return JsonResponse(
                    appointments,
                    encoder=ApptDetailEncoder,
                    safe=False,
                )
        except ServiceAppt.DoesNotExist:
                response = JsonResponse({"message": "Does not exist"})
                response.status_code = 404
                return response




@require_http_methods(["GET", "POST"])
def tech_list(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        technicians = Technician.objects.create(**content)
        return JsonResponse(
            technicians,
            encoder = TechnicianEncoder,
            safe = False

        )


@require_http_methods(["DELETE", "GET", "PUT"])
def tech_detail(request, id):
    if request.method == "GET":
        try:

            technician = Technician.objects.get(id=id)
            return JsonResponse(
               technician,
                encoder=TechnicianEncoder,
                safe=False,
            )

        except Technician.DoesNotExist:
            return JsonResponse({"Message": "Does not exist"})

    elif request.method == "DELETE":
        try:

            technician = Technician.objects.get(id=id)
            technician.delete()
            return JsonResponse(
                technician,
                encoder = TechnicianEncoder,
                safe = False,
                )
        except Technician.DoesNotExist:
                return JsonResponse({"Message": "Can not delete"})

    else:
        try:
                content = json.loads(request.body)
                technician = Technician.objects.get(id=id)
                props = ["id", "name", "employee_num"]
                for prop in props:
                    if prop in content:
                        setattr(technician, prop, content[prop])
                technician.save()
                return JsonResponse(
                    technician,
                    encoder=TechnicianEncoder,
                    safe=False,
                )
        except Technician.DoesNotExist:
                response = JsonResponse({"message": "Does not exist"})
                response.status_code = 404
                return response
