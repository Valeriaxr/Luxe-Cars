import React from 'react';

class ModelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            picture_url: '',
            manufacturer: '',
            manufacturers:[]
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);
    this.handleManuChange = this.handleManuChange.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({manufacturers: data.manufacturers});
        }
    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        console.log(data)

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel);


            const cleared = {
                name:'',
                picture_url: '',
                manufacturer: '',
            };
            this.setState(cleared);
        }
    }


    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }
    handlePicChange(event) {
        const value = event.target.value;
        this.setState({ pictures_url: value });
    }

    handleManuChange(event) {
        const value = event.target.value;
        this.setState({ manufacturer: value });
    }


    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a vehicle model</h1>
                <form onSubmit={this.handleSubmit} id="create-model-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleNameChange} value={this.state.name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handlePicChange} value={this.state.picture_url} placeholder="picture_url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                        <label htmlFor="picture_url">Picture URL</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleManuChange} value={this.state.manufacturer} placeholder="manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                        <label htmlFor="manufacturer">Choose a manufacturer</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default ModelForm;
