# CarCar

Team:

* Valeria - Service
* Christian





## Service microservice

I designed the models for a service that included a Technician, ServiceAppointment, and an AutomobileVO to retrieve the VIN from the Inventory Automobile model. However, during the implementation, I found that I needed to incorporate additional features in the ServiceAppointment model such as a VIP property and a status property. The VIP property is a boolean field that determines whether a VIN belongs to an existing inventory and if it does, it receives VIP treatment during the service appointment, which is displayed in the Appointments List. If a VIN is not found, the VIP property is set to False. The status property is used to indicate the status of each appointment, whether it is pending, cancelled, or complete.



