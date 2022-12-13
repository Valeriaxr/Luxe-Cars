from .models import AutomobileVO, ServiceAppt, Technician
from common.json import ModelEncoder




class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "color",
        "year",
        "model",
        "vin",
        "import_href",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_num",
    ]


class ApptDetailEncoder(ModelEncoder):
    model = ServiceAppt
    properties = [
        "id",
        "VIN",
        "customer",
        "technician",
        "date_time",
        "reason_appt",
        "vip",

    ]

    encoders = {
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self,o):
        return {"technician": o.technician.name}
