    import React from "react";


    class ServiceHistory extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                search: '',
                VIN: '',
                appointments:[]
            };
            this.handleSearchChange = this.handleSearchChange.bind(this);
            this.handleVINChange = this.handleVINChange.bind(this);
        };

        async componentDidMount(){
            const url = 'http://localhost:8100/api/automobiles/';
            const response = await fetch(url);

            if(response.ok) {
                const data = await response.json();
                this.setState({auto: data.auto});
            }
        }


        async handleSubmit(event) {
            event.preventDefault();
            const data = {...this.state};


            const historyUrl = 'http://localhost:8080/api/appointment/';
            const fetchConfig = {
                method: "GET",
                body: JSON.stringify(data),
                headers: {
                'Content-Type': 'application/json',
                },
            };
            const response = await fetch(historyUrl, fetchConfig);
            if (response.ok) {
                const apptHistory = await response.json();
                console.log(apptHistory)

                this.setState({
                    appointments: []

                })
            }

        }

        handleSearchChange(event) {
            const value = event.target.value;
            this.setState({search: value});
        }
        handleVINChange(event) {
            const value = event.target.value;
            this.setState({VIN: value});
        }



        render () {
            return (
                <>
                <div>

                    <input onChange={this.handleSearchChange} type="text" className="form-control mt-5" placeholder="Search VIN"/>
                    <div onClick={() => console.log("Searching for VIN")}>
                        <button  className="btn btn-success" onClick={this.handleClick}>Enter</button>
                    </div>
                    <table className='table table-striped mt-5'>

                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Customer's Name</th>
                                <th>Technician</th>
                                <th>Date and Time </th>
                                <th>Reason for Appointment</th>
                            </tr>
                        </thead>
                        <tbody>


                            {this.state.appointments?.map(appointments => {

                                if (!this.state.appointments.vin) {
                                    return "Customer does not exist"
                                }

                                return (

                                    <tr key={appointments.id}>
                                        <td {...appointments.vin} />
                                        <td>{appointments.customer}</td>
                                        <td>{appointments.date_time}</td>
                                        <td>{appointments.technician}</td>
                                        <td>{appointments.reason_appt}</td>
                                    </tr>


                                    );

                                })}

                            </tbody>

                        </table>

                </div>

                </>



                    );

            }
        }






export default ServiceHistory;
