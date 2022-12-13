import React from 'react';

class TechForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            employee_num: '',
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        console.log(data)

        const techUrl = 'http://localhost:8080/api/technician/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(techUrl, fetchConfig);
        if (response.ok) {
            const newTech = await response.json();
            console.log(newTech);


            const cleared = {
                name:'',
                employee_num: '',
            };
            this.setState(cleared);
        }
    }


    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }
    handleNumChange(event) {
        const value = event.target.value;
        this.setState({ employee_num: value });
    }


    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add Technician</h1>
                <form onSubmit={this.handleSubmit} id="create-technician-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleNameChange} value={this.state.name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">Technician</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleNumChange} value={this.state.employee_num} placeholder="employee_num" required type="text" name="employee_num" id="employee_num" className="form-control" />
                        <label htmlFor="employee_num">Employee Number</label>
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default TechForm;
