import React from 'react';


class ManuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
        };
    }


    async componentDidMount(){
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);

        if(response.ok) {
            const data = await response.json();
            this.setState({manufacturers: data.manufacturers});
        }
    }




    render() {
        return  (
            <div>
            <table className = 'table table-striped mt-5'>
                <thead>
                    <tr>
                        <th>Manufacturer</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.manufacturers.map((manu)=> {
                        return (
                            <tr key={manu.id}>
                                <td>{manu.name}</td>
                            </tr>
                        );
                    })}



                </tbody>
                </table>
            </div>
        );
     }

    }



export default ManuList;
