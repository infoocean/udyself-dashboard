import React from 'react';
import { Navbar, NavDropdown, Row,Collapse } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Style.css';
import { useState } from 'react';
import HomePage from './Home';
import NewRideRequest from './RequestRide/NewRideRequest.jsx';
import ActiveRide from './RequestRide/ActiveRide';
import CompletedRide from './RequestRide/CompletedRide';
import ContactTravelAgency from './ContactTravelAgency.jsx';
import Billing from './Billing';
import MyProfile from './MyProfile';
import Link2 from './link2';
import Link3 from './link3';
import Link4 from './link4';
import ExistingEmployee from './ManageEmployee/ExistingEmployee';
import AddNewEmployee from './ManageEmployee/AddNewEmployee';
import RideActivity from './RideActivity';

export default function NavSidebarf() {

  const [open, setOpen] = useState(false);

  const [dropdown, setdropdown]=useState(false);

  return (
    <Row>
    <div className="container-fluid">
    <Router>
    <div id="dashmenu" className="">
    
      <Navbar className="sidebar">
        <ul style={{margin:"0px",padding: "0px"}}>
          <li ><Link to="/" className="nav-link active">Dashboard Menu</Link></li>
          {/* <li className="nav-item"><Link to="/home2" className="nav-link drop-link" style={{padding: "0px"}}>
            <NavDropdown title="Travel Agency" id="sidedrop1" >
            <ul style={{margin:"0px", padding:"0px"}}>
              <li><NavDropdown.Item className=""><Link to="/existing-agency" className="nav-link">Existing Agency</Link></NavDropdown.Item></li>
              <li><NavDropdown.Item className=""><Link to="/add-agency" className="nav-link">Add New Agency</Link></NavDropdown.Item></li>
              <li><NavDropdown.Item className=""><Link to="/general-querry" className="nav-link">General Querry</Link></NavDropdown.Item></li>
              </ul>
            </NavDropdown>
          </Link></li> */}
          <li className="nav-item"><Link  className="nav-link dropdown" onClick={() => setOpen(!open)}
          aria-controls="collapse-riderequest"
          aria-expanded={open}>Request for Ride <FontAwesomeIcon icon={faCaretDown}/>
          </Link></li>
          <Collapse in={open}>
          <div id="collapse-riderequest">
            <li><NavDropdown.Item><Link to="/newriderequest" className="nav-link">New Ride Request</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/activeride" className="nav-link">Active Ride Request</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/completedride" className="nav-link">Completed Ride</Link></NavDropdown.Item></li>
          </div>
          </Collapse> 
          <li className="nav-item"><Link  className="nav-link dropdown" onClick={() => setdropdown(!dropdown)}
          aria-controls="collapse-employee"
          aria-expanded={dropdown}>Manage Employee <FontAwesomeIcon icon={faCaretDown}/>
          </Link></li>
          <Collapse in={dropdown}>
          <div id="collapse-employee">
            <li><NavDropdown.Item><Link to="/manageemployee/addnewemployee" className="nav-link">Add New Employee</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/manageemployee/existingemployee" className="nav-link">All Employee List</Link></NavDropdown.Item></li>
          </div>
          </Collapse> 
          <li className="nav-item"><Link to="/billing" className="nav-link" >Billing History</Link></li>
          <li className="nav-item"><Link to="/rideactivity" className="nav-link">Ride Activity <FontAwesomeIcon icon={faCaretDown}/></Link></li>
          <li className="nav-item"><Link to="/contacttravelagency" className="nav-link">Cont Travel Agency</Link></li>
          <li className="nav-item"><Link to="/myprofile" className="nav-link">MyProfile</Link></li>
          <li className="nav-item">
          {/* Dropdown-menu */}
          <NavDropdown title="Dropdown" id="sidedrop1" >
          <ul style={{margin:"0px", padding:"0px"}}>
            <li><NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item></li>
            <li><NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item></li>
            <li><NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item></li>
            </ul>
          </NavDropdown> 
          </li>
          <li className="nav-item"><Link to="/link" className="nav-link">Link1</Link></li>
          <li className="nav-item"><Link to="/link" className="nav-link">Link1</Link></li>
          <li className="nav-item"><Link to="/link" className="nav-link">Link1</Link></li>
          <li className="nav-item"><Link to="/link" className="nav-link">Link1</Link></li>
         </ul>
      </Navbar>
    </div>
    <div className="outsideOfMenu">
      <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/newriderequest">
            <NewRideRequest/>
          </Route>
          <Route path="/activeride">
            <ActiveRide/>
          </Route>
          <Route path="/completedride">
            <CompletedRide />
          </Route>
          <Route path="/manageemployee/addnewemployee">
            <AddNewEmployee/>
          </Route>
          <Route path="/manageemployee/existingemployee">
            <ExistingEmployee/>
          </Route>
          <Route path="/contacttravelagency">
            <ContactTravelAgency />
          </Route>
          <Route path="/billing">
            <Billing />
          </Route>
          <Route path="/rideactivity">
            <RideActivity />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
          <Route path="/link4">
            <Link2 />
          </Route>
          <Route path="/home2">
            <Link3 />
          </Route>
        </Switch>
      </div>
     </Router>
    </div>
  </Row>
  )
}
