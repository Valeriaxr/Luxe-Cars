import React from "react";


class AppointmentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments:[]
        };

    };

    async componentDidMount(){
        const url = 'http://localhost:8080/api/appointment/';
        const response = await fetch(url);

        if(response.ok) {
            const data = await response.json();
            this.setState({appointments: data.appointment});
        }
    }


    async Cancel(id) {
        const deleteUrl = `http://localhost:8080/api/appointment/${id}/`;
        const fetchConfig = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
              },
        }
        const response = await fetch(deleteUrl, fetchConfig);
        if(response.ok){
            this.componentDidMount();

        }
    };

    async Complete(id) {
        const putUrl = `http://localhost:8080/api/appointment/${id}`;
        const fetchConfig = {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({complete: true})
          };
          const response = await fetch(putUrl, fetchConfig);
          if(response.ok){
            this.setState({complete: true});
        }
    }



    render() {
        return  (
            <div>
            <table className = 'table table-striped mt-5'>
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer's Name</th>
                        <th>Technician</th>
                        <th>Date and Time</th>
                        <th>Reason for Appointment</th>
                        <th>Vip</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.appointments.map(appointments => {

                        if(appointments.vin.length < 0) {
                            return "Not a Vip member"
                        }

                        return(
                            <tr key={appointments.id}>
                                <td>{appointments.vin}</td>
                                <td>{appointments.customer}</td>
                                <td>{appointments.technician.name}</td>
                                <td>{appointments.reason_appt}</td>
                                <td><button className="btn btn-success" onClick={()=>this.handleComplete(appointments.id)} to="">Complete</button></td>
                                <td><button className="btn btn-danger" onClick={()=>this.handleDelete(appointments.id)} to="">Cancel</button></td>
                            </tr>



                            );

                })}
                </tbody>
            </table>
            </div>
        );


    }
}



export default AppointmentList;
