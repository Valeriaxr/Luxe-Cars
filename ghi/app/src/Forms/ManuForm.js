import React from 'react';

class CreateManuForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        console.log(data)

        const manuUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(manuUrl, fetchConfig);
        if (response.ok) {
            const newManu = await response.json();
            console.log(newManu);


            const cleared = {
                name:'',
            };
            this.setState(cleared);
        }
    }


    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a Manufacturer</h1>
                <form onSubmit={this.handleSubmit} id="create-manufacturer-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleNameChange} value={this.state.name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">name</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default CreateManuForm;
