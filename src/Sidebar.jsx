import React from 'react';
import { useState } from 'react';
import { Navbar, NavDropdown, Row,Collapse } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Billing from './MyComponents/SidebarComponent/Billing';
import ContactTravelAgency from './MyComponents/SidebarComponent/ContactTravelAgency';
import HomePage from './MyComponents/SidebarComponent/HomePage';
import AddNewEmployee from './MyComponents/SidebarComponent/ManageEmployeePages/AddNewEmployee';
import ExistingEmployee from './MyComponents/SidebarComponent/ManageEmployeePages/AllExistingEmployee';
import MyProfile from './MyComponents/SidebarComponent/MyProfile';
import RideActivity from './MyComponents/SidebarComponent/RideActivity';
import ActiveRide from './MyComponents/SidebarComponent/RideDetailsPages/ActiveRide';
import CompletedRide from './MyComponents/SidebarComponent/RideDetailsPages/CompletedRide';
import NewRide from './MyComponents/SidebarComponent/RideDetailsPages/NewRide';
/*
import NewRideRequest from './MyComponent/RequestRide/NewRideRequest';
import ActiveRide from './MyComponent/RequestRide/ActiveRide';
import CompletedRide from './MyComponent/RequestRide/CompletedRide';
import AddNewEmployee from './MyComponent/ManageEmployee/AddNewEmployee';
import ExistingEmployee from './MyComponent/ManageEmployee/ExistingEmployee';
import ContactTravelAgency from './MyComponent/ContactTravelAgency.jsx';
*/


export default function Sidebar() {

  const [open, setOpen] = useState(false);
  const [dropdown, setdropdown]=useState(false);
  const [setdropdown1, setnewdropdown]=useState(false);

  return (
    <>
    <Router>
    <Row>
    <div className="container-fluid">
      <div id="dashmenu" className="">
      <Navbar className="sidebar">
        <ul style={{margin:"0px",padding: "0px"}}>
          <li >
            <Link to="/dashboard" className="nav-link active">Dashboard Menu</Link>
          </li>
          {/* <li className="nav-item"><Link to="/home2" className="nav-link drop-link" style={{padding: "0px"}}>
            <NavDropdown title="Travel Agency" id="sidedrop1" >
            <ul style={{margin:"0px", padding:"0px"}}>
              <li><NavDropdown.Item className=""><Link to="/existing-agency" className="nav-link">Existing Agency</Link></NavDropdown.Item></li>
              <li><NavDropdown.Item className=""><Link to="/add-agency" className="nav-link">Add New Agency</Link></NavDropdown.Item></li>
              <li><NavDropdown.Item className=""><Link to="/general-querry" className="nav-link">General Querry</Link></NavDropdown.Item></li>
              </ul>
            </NavDropdown>
          </Link></li> */}
          <li className="nav-item">
            <Link  className="nav-link dropdown" onClick={() => setOpen(!open)} aria-controls="collapse-riderequest" aria-expanded={open}>Request for Ride <i class="fas fa-angle-down"></i></Link>
          </li>
          <Collapse in={open}>
          <div id="collapse-riderequest">
            <li><NavDropdown.Item><Link to="/dashboard/newriderequest" className="nav-link sublink">New Ride Request</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/dashboard/activeride" className="nav-link sublink">Active Ride Request</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/dashboard/completedride" className="nav-link sublink ">Completed Ride</Link></NavDropdown.Item></li>
          </div>
          </Collapse> 
          <li className="nav-item">
            <Link  className="nav-link dropdown" onClick={() => setdropdown(!dropdown)} aria-controls="collapse-employee" aria-expanded={dropdown}>Manage Employee  <i class="fas fa-angle-down"></i></Link>
          </li>
          <Collapse in={dropdown}>
          <div id="collapse-employee">
            <li><NavDropdown.Item><Link to="/manageemployee/addnewemployee" className="nav-link sublink">Add New Employee</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/dashboard/manageemployee/existingemployee" className="nav-link sublink">All Employee List</Link></NavDropdown.Item></li>
          </div>
          </Collapse> 
          <li className="nav-item">
            <Link to="/dashboard/billing" className="nav-link" >Billing History</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/subscription" className="nav-link">Subscription</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/contacttravelagency" className="nav-link">Cont Travel Agency</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link dropdown" onClick={() => setnewdropdown(!dropdown)} aria-controls="collapse-rideactivity" aria-expanded={dropdown}>Ride Activity <i class="fas fa-angle-down"></i></Link>
          </li>
          <Collapse in={setdropdown1}>
          <div id="collapse-rideactivity">
            <li><NavDropdown.Item><Link to="/dashboard/manageemployee/addnewemployee" className="nav-link sublink">Add New Employee</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/dashboard/manageemployee/existingemployee" className="nav-link sublink">All Employee List</Link></NavDropdown.Item></li>
          </div>
          </Collapse> 
          
          <li className="nav-item">
            <Link to="/dashboard/myprofile" className="nav-link">MyProfile</Link>
          </li>
        </ul>
      </Navbar>
    </div>
    {/*load all main part component dashboard part*/}
    <div className="outsideOfMenu">
      <Switch>
          <Route path="/dashboard" exact={true}>
            <HomePage/>
          </Route>
          <Route exact path="//dashboard/newriderequest">
            <NewRide/>
          </Route>
          <Route exact path="//dashboard/activeride">
            <ActiveRide/>
          </Route>
          <Route exact path="/dashboard/completedride">
            <CompletedRide />
          </Route>
          <Route exact path="/dashbboard/manageemployee/addnewemployee">
            <AddNewEmployee/>
          </Route>
          <Route exact path="/dashboard/manageemployee/existingemployee">
            <ExistingEmployee/>
          </Route>
          <Route exact path="/dashboard/contacttravelagency">
            <ContactTravelAgency />
          </Route>
          <Route exact path="/dashboard/billing">
            <Billing />
          </Route>
          <Route exact path="/dashboard/rideactivity">
            <RideActivity />
          </Route>
          <Route exact path="/dashboard/myprofile">
            <MyProfile />
          </Route>
           
        </Switch>
      </div>
    </div>
  </Row>
  </Router>
  
  </>
  );
};

