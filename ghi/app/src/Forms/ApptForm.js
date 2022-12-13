import React from "react";


class AppointmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            VIN: "",
            customer: "",
            technician: "",
            date_time: "",
            reason_appt: "",
            vip: "",

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVINChange = this.handleVINChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
        this.handleDate_TimeChange = this.handleDate_TimeChange.bind(this);
        this.handleReason_ApptChange = this.handleReason_ApptChange.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/technician/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({appointments: data.appointments});
        }
    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};


        const appointmentUrl = 'http://localhost:8080/api/appointment/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            console.log(newAppointment);

            this.setState({
                VIN: "",
                customer: "",
                technician: "",
                date_time: "",
                reason_appt: "",
                vip: "",

            })
        }

    }
    handleVINChange(event) {
        const value = event.target.value;
        this.setState({ VIN: value });
    }
    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({ customer: value });
    }

    handleTechnicianChange (event) {
        const value = event.target.value;
        this.setState({ technician: value });
    }
    handleDate_TimeChange(event) {
        const value = event.target.value;
        this.setState({ date_time: value });
    }

    handleReason_ApptChange(event) {
        const value = event.target.value;
        this.setState({ reason_appt: value });
    }


    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add Appointment</h1>
                <form onSubmit={this.handleSubmit} id="create-technician-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleVINChange} value={this.state.VIN} placeholder="VIN" required type="text" name="VIN" id="VIN" className="form-control" />
                        <label htmlFor="VIN">VIN</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleCustomerChange} value={this.state.customer} placeholder="customer" required type="text" name="customer" id="customer" className="form-control" />
                        <label htmlFor="customer">Customer</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input onChange={this.handleTechnicianChange} value={this.state.technician} placeholder="technician" required type="text" name="technician" id="technician" className="form-control" />
                        <label htmlFor="technician">Technician</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input onChange={this.handleDate_TimeChange} value={this.state.date_time} placeholder="date_time" required type="text" name="date_time" id="date_time" className="form-control" />
                        <label htmlFor="date_time">Date and Time</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input onChange={this.handleReason_ApptChange} value={this.state.reason_appt} placeholder="reason_appt" required type="text" name="reason_appt" id="reason_appt" className="form-control" />
                        <label htmlFor="reason_appt">Reason for Appointment</label>
                    </div>

                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}



export default AppointmentForm;
