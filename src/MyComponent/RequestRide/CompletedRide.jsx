import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Collapse, Nav, NavLink} from 'react-bootstrap';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TimingDetails from '../RideHistory/TimingDetails';
import EmployeeDetails from '../RideHistory/EmployeeDetails';
import Notifications from '../RideHistory/Notofications';
import Control from '../RideHistory/Controls';
import Canclation from '../RideHistory/Canclation';


// import {DashboardLayout} from './Layout';

const CompletedRide = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <div className="completedridedetails">
      <Collapse in={open}>
            <div id="activerideinformation">
            <Router>
                <Nav className="ridedetails justify-content-center">
                    <Link  className="link" to="/">Timing Schedule</Link>
                    <Link  className="link" to="employeedetails">Employ Details</Link>
                    <Link  className="link" to="/notifications">Notifications</Link>
                    <Link  className="link" to="/control">Controls</Link>
                    <Link  className="link" to="/canclation">Canclation</Link>
                </Nav>
                <Switch>
                <div className="ridedata">
                    <Route exact path="/" component={TimingDetails}/>
                    <Route path="/employeedetails" component={EmployeeDetails}/>
                    <Route path="/notifications" component={Notifications}/>
                    <Route path="/controls" component={Control}/>
                    <Route path="/canclation" component={Canclation}/>
                </div>
                </Switch>
            </Router>
            </div>
        </Collapse>
        
      
           <h4 className="pt-3">Completed Ride</h4> 
           <table class=' mt-4 table table-bordered table-condensed table-striped table-hover'>
                <thead>
                <tr>
                   <th>SE NO</th>
                   <th>Ride Id</th>
                   <th>Name</th>
                   <th>Number</th>
                   <th>Pickup Location</th>
                   <th>Pickup Time</th>
                   <th>Drop Location</th>
                   <th>Drop Time</th>
                   <th>Date</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>1</td>
                    <td  onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>0186CS171099</td>
                    <td>Shubham</td>
                    <td>91316347079</td>
                    <td>Bhopal</td>
                    <td>5:90 PM</td>
                    <td>Indore</td>
                    <td>9:90 AM</td>
                    <td>20-22-2029</td>
                    <td></td>
                    <td>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>2</td>
                    <td>0186CS171099</td>
                    <td>Shubham</td>
                    <td>91316347079</td>
                    <td>Bhopal</td>
                    <td>5:90 PM</td>
                    <td>Pune</td>
                    <td>8:00 AM</td>
                    <td>20-22-2029</td>
                    <td></td>
                    <td>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>  
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>3</td>
                    <td>0186CS171099</td>
                    <td>Shubham</td>
                    <td>91316347079</td>
                    <td>JabalPur</td>
                    <td>8:00 AM</td>
                    <td>Indore</td>
                    <td>8:00 AM</td>
                    <td>20-22-2029</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>4</td>
                    <td>0186CS171099</td>
                    <td>Shubham</td>
                    <td>91316347079</td>
                    <td>Bangalore</td>
                    <td>8:00 AM</td>
                    <td>Indore</td>
                    <td>8:00 AM</td>
                    <td>20-22-2029</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>5</td>
                    <td>0186CS171099</td>
                    <td>Shubham</td>
                    <td>91316347079</td>
                    <td>Rewa</td>
                    <td>8:00 AM</td>
                    <td>Indore</td>
                    <td>8:00 AM</td>
                    <td>20-22-2029</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                
                </tbody>
            </table>

               <div id="deletebox">       
                <h4>Are You Sure To Delete!</h4>
                    <button className="btn" onClick={(e) =>{
                        document.querySelector("#deletebox").classList.remove('click')
                         }}>YES
                    </button>
                    <button className="btn" onClick={(e) =>{
                        document.querySelector("#deletebox").classList.remove('click')
                        }}>No
                    </button>
                </div> 

        </div>

    </>
  )
}

export default CompletedRide;