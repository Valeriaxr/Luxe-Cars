from django.urls import path
from .views import api_list_appointment, api_show_appointment, tech_list, tech_detail




urlpatterns = [
    path("appointment/", api_list_appointment, name="api_list_appointment"),
    path("appointment/<int:id>", api_show_appointment, name="api_show_appointment"),
    path("technician/", tech_list, name="tech_list"),
    path("technician/<int:id>/", tech_detail, name="tech_detail"),
    # path("automobiles/", vin_list, name='vin_list'),
    # path("bins/<int:bin_vo_id>/shoes/",api_list_shoes, name="api_list_shoes"),
    # path("shoes/<int:pk>/", api_show_shoes, name="api_show_shoes"),

]
