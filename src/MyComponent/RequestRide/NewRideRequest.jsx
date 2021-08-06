import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubscript, faSuperscript, faTrash} from '@fortawesome/free-solid-svg-icons';
import { faBell} from '@fortawesome/free-solid-svg-icons';

// import {DashboardLayout} from './Layout';

const NewRideRequest = () => {
  return (
    <>
    <div id="newriderequest">
        <h4 className="headingtitle justify-content-center">New Ride Request <FontAwesomeIcon icon={faBell}/><faSuperscript>3</faSuperscript></h4>  
        <div class="container pt-3 pb-3">
            <div class="main-body">
                <div class="row gutters-sm">
                    <div class="col-lg-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center justify-content">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="70"/>
                                    <div class="mt-3">
                                            <h6>Name : Shubham Jaiswal</h6>
                                             <p class="text-secondary mb-1">Email : sj2585097@gmail.com</p>
                                             <p class="text-muted font-size-sm">Number : 7089413024</p>
                                             <h6>Pickup Location :<span> Vijay Nagar Indore</span></h6>
                                             <h6> Date :<span>20 july Mon 2017</span></h6>
                                             <h6>Time : <span> 8:00 AM</span></h6>
                                             <input type="checkbox"/> Accept
                                        </div>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="70"/>
                                        <div class="mt-3">
                                            <h6>Name : Shubham Jaiswal</h6>
                                             <p class="text-secondary mb-1">Email : sj2585097@gmail.com</p>
                                             <p class="text-muted font-size-sm">Number : 7089413024</p>
                                             <h6>Pickup Location :<span> Vijay Nagar Indore</span></h6>
                                             <h6> Date :<span>20 july Mon 2017</span></h6>
                                             <h6>Time : <span> 8:00 AM</span></h6>
                                             <input type="checkbox"/> Accept
                                        </div>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="70"/>
                                        <div class="mt-3">
                                            <h6>Name : Shubham Jaiswal</h6>
                                             <p class="text-secondary mb-1">Email : sj2585097@gmail.com</p>
                                             <p class="text-muted font-size-sm">Number : 7089413024</p>
                                             <h6>Pickup Location :<span> Vijay Nagar Indore</span></h6>
                                             <h6> Date :<span>20 july Mon 2017</span></h6>
                                             <h6>Time : <span> 8:00 AM</span></h6>
                                             <input type="checkbox"/> Accept
                                        </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
     <div>
           <h5 className="mt-3"> All New Ride Request Details</h5> 
           <table class=' mt-3 table table-bordered table-condensed table-striped table-hover'>
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
                    <td>0186CS171099</td>
                    <td>Shubham</td>
                    <td>9131649079</td>
                    <td>Bhopal</td>
                    <td>4:23 AM</td>
                    <td>Indore</td>
                    <td>8:50 PM</td>
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
                    <td>9131649079</td>
                    <td>Bhopal</td>
                    <td>4:23 AM</td>
                    <td>Pune</td>
                    <td>4:23 AM</td>
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
                    <td>9131649079</td>
                    <td>JabalPur</td>
                    <td>4:23 AM</td>
                    <td>Indore</td>
                    <td>4:23 AM</td>
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
                    <td>9131649079</td>
                    <td>Bangalore</td>
                    <td>4:23 AM</td>
                    <td>Indore</td>
                    <td>4:23 AM</td>
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
                    <td>9131649079</td>
                    <td>Rewa</td>
                    <td>4:23 AM</td>
                    <td>Indore</td>
                    <td>4:23 AM</td>
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

export default NewRideRequest;