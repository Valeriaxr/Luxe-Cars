import React from "react";

class SalesForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sales_name: "",
            employee_number: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const value = event.target.value;
        const key = event.target.name;
        const changeDict = {};
        changeDict[key] = value;
        this.setState(changeDict);
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        console.log(data);

        const url = "http://localhost:8090/api/sales_person_list/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        };
        const response = await fetch(url,fetchConfig);
        if(response.ok){
            const newCustomer = await response.json();
            console.log(newCustomer)

            const  cleared = {
                sales_name: "",
                employee_number: "",
            };
            this.setState(cleared)
        }
    }
    render(){
        return(
          <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Register Sales Person</h1>
              <form id="create-customer-form">
                <div className="form-floating mb-3">
                  <input placeholder="sales_person_name" required type="text" name="sales_person_name" id="name" className="form-control"/>
                  <label for="name">Sales Person Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input placeholder="Address" required type="text" name="address" id="Address" className="form-control"/>
                  <label for="room_count">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
        );
    }
}
export default SalesForm;