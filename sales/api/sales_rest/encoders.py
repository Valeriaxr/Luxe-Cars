from common.json import ModelEncoder
from .models import Customer, Salesperson, Sales, AutomobileVO

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["customer_name", "customer_address", "customer_phone_number"]

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["sales_name", "employee_number"]

class SalesListEncoder(ModelEncoder):
    model = Sales
    properties = ["automobile", "sales_person","customer", "price"]