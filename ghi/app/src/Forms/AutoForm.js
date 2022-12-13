import React from "react";


class AutoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            color: "",
            year: '',
            vin: "",
            model:'',
            models: []


        };

        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleColorChange= this.handleColorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);

    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({models: data.models});
        }
    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};


        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(autoUrl, fetchConfig);
        if (response.ok) {
            const autoUrl = await response.json();
            console.log(autoUrl);

            const cleared = {
                color: "",
                year: '',
                vin: "",
                model:'',
            };
            this.setState(cleared);
        }


    }
    handleColorChange(event) {
        const value = event.target.value;
        this.setState({ color: value });
    }
    handleYearChange(event) {
        const value = event.target.value;
        this.setState({ year: value });
    }

    handleVinChange (event) {
        const value = event.target.value;
        this.setState({ vin: value });
    }
    handleModelChange(event) {
        const value = event.target.value;
        this.setState({ model: value });
    }


    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add an Automobile to Inventory</h1>
                <form onSubmit={this.handleSubmit} id="create-auto-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handlColorChange} value={this.state.color} placeholder="color" required type="text" name="color" id="color" className="form-control" />
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleYearChange} value={this.state.year} placeholder="year" required type="text" name="year" id="year" className="form-control" />
                        <label htmlFor="year">Year</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input onChange={this.handleVinChange} value={this.state.vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                        <label htmlFor="vin">VIN</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input onChange={this.handleModelChange} value={this.state.model} placeholder="model" required type="text" name="model" id="model" className="form-control" />
                        <label htmlFor="model">Choose a Model</label>
                    </div>

                            <button className="btn btn-primary">Create</button>

                </form>
             </div>
            </div>
            </div>
        );
    }
}



export default AutoForm;
