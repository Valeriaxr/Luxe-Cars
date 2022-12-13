import React from "react";


class AutoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            automobiles: [],
        };
    }

    async componentDidMount(){
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);

        if(response.ok) {
            const data = await response.json();
            this.setState({automobiles: data.autos});
        }
    }



    render() {
        return  (
            <div>
            <table className = 'table table-striped mt-5'>
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.automobiles.map(auto => {
                        return (
                            <tr key={auto.id}>
                                <td>{auto.vin}</td>
                                <td>{auto.color}</td>
                                <td>{auto.year}</td>
                                <td>{auto.model.name}</td>
                                <td>{auto.model.manufacturer.name}</td>
                                </tr>

                        );
                    })}

                </tbody>
                </table>
            </div>
            )
                }
        }






export default AutoList;
