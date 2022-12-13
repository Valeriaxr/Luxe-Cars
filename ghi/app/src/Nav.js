import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>



          <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Models
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/models/list">Models</NavLink>
              <NavLink className="dropdown-item" to="/models/create">Create Model</NavLink>
              </div>
              </li>


          <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Manufacterer
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {/* <NavLink className="dropdown-item" to="/manufacturers/list">Manufacturers</NavLink> */}
              <NavLink className="dropdown-item" to="/manufacturers/create">Manufacturers</NavLink>
              </div>
              </li>

              <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Automobiles
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/automobiles/list">Automobiles</NavLink>
              <NavLink className="dropdown-item" to="/automobiles/create">Create an Automobile</NavLink>
              </div>
              </li>

          <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Appointments
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/appointment/list">Appointments</NavLink>
              <NavLink className="dropdown-item" to="/appointment/create">Create an Appointment</NavLink>
              <NavLink className="dropdown-item" to="/appointment/history">Service History</NavLink>
              </div>
              </li>

              <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Technician
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/technician/create">Technicans</NavLink>
              </div>
              </li>

























        </div>
      </div>
    </nav>
  )
}

export default Nav;
