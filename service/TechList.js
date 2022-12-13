// import React from 'react';

// class TechList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             technicians: []
//         };
//     };

//     async componentDidMount() {
//         const url = "http://localhost:8080/api/technicians/";
//         const response = await fetch(url);
//         console.log(response)

//         if (response.ok) {
//             const data = await response.json();
//             console.log(data)

//             this.setState({ technicians: data.technicians})
//         }
//     }

//     async isDelete(employee_num){
//         const deleteUrl = `http://localhost:8080/api/technicians/${employee_num}/`;
//         const fetchConfig = {method: "delete"}
//         const response = await fetch(deleteUrl, fetchConfig);
//         if (response.ok) {
//             window.location.reload();
//         }
//     };

//     render() {
//         return (
//             <div>
//                 <h1>Technician List</h1>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Employee number</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.technicians.map(technician => {
//                             return (
//                                 <tr key={technician.employee_num}>
//                                     <td>{technician.name}</td>
//                                     <td> <button onClick={() => this.isDelete(technician.emplyee_num)} type="button" className='btn btn-danger'>Delete</button></td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// export default TechList;
