import React from 'react';
import { Collapse } from 'react-bootstrap';
import { useState } from 'react';

function AddNewEmployee(){
    const [open, setOpen] = useState(false);

    return(
        <>
        <div className="formwithmap">
        <Collapse in={open}>
            <div id="livelocation" style={{backgroundColor:'white', margin:'50px'}} className="p-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="well well-sm text-center">
                            <form class="form-horizontal" method="post">
                                <fieldset>
                                    <div className="title pb-3" style={{textAlign:'left'}}>
                                        <h5 style={{color:'red'}}>Hii, Shubham</h5>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-10 col-md-offset-1 w-100">
                                         <input id="origin-input" class="controls" type="text" placeholder="Enter an origin location"/>
                                        </div>
                                    </div>
                                    <div class="form-group pt-2">
                                        <div class="col-md-10 col-md-offset-1 w-100">
                                            <input id="destination-input" class="controls" type="text" placeholder="Enter a destination location"/>
                                        </div>
                                    </div>

                                    {/*
                                    <div class="form-group">
                                        <div class="col-md-10 col-md-offset-1">
                                             <div id="mode-selector" class="controls">
                                                <input type="radio" name="type" id="changemode-walking" checked="checked" />
                                                    <label for="changemode-walking">Walking</label>
                                                    <input type="radio" name="type" id="changemode-transit" />
                                                    <label for="changemode-transit">Transit</label>
                                                    <input type="radio" name="type" id="changemode-driving" />
                                                    <label for="changemode-driving">Driving</label>
                                              </div>     
                                        </div>
                                    </div>
                                    */}
                                    <div class="form-group pt-2">
                                        <div class="col-md-12 text-center pt-2 pb-2">
                                            <button type="submit" class="btn btn-primary w-100">Set Location</button>
                                        </div>
                                    </div>
                                    <div className="title pt-4" style={{textAlign:'left'}}>
                                        <h5 style={{color:'darkblue'}}>Distance Major,</h5>
                                        <span>Distance <i class="fas fa-route"></i> : 12 KM</span><br/>
                                        <span>Time <i class="far fa-clock"></i> : 1 H 22 M</span>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="map" class="map">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4995220078467!2d75.68595271393406!3d22.597814437741906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39625791ce3d439d%3A0x4662b0242a2e125!2sHousing%20Board%20Colony%2C%20Pithampur!5e0!3m2!1sen!2sin!4v1628755408560!5m2!1sen!2sin"
                            width="440" height="400" style={{border:'1px solid black'}}  allowfullscreen="" loading="lazy"></iframe> 
                            <initMap/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Collapse>
        </div>
        
        <div className="myform">
            <div class="container-fluid px-1 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11">
                        <h4 className="text-center mt-3"><span>Add New Employee</span></h4>
                        <div class="form pt-5">
                            <form class="form-card">
                                <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex">
                                        <label class="form-control-label">Employee Id<span class="text-danger"> *</span></label>
                                        <input type="text" id="name" name="name" placeholder="Emp Id" onblur="validate(1)"/>
                                    </div>
                                    <div class="form-group col-sm-6 flex-column d-flex">
                                        <label class="form-control-label">Employee Name<span class="text-danger"> *</span></label>
                                        <input type="text" id="name" name="name" placeholder="name" onblur="validate(1)"/>
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex text-left"> 
                                        <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> 
                                        <input type="text" id="email" name="email" placeholder="email" onblur="validate(2)"/>
                                    </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> 
                                        <label class="form-control-label px-3">Enter Number<span class="text-danger"> *</span></label> 
                                        <input type="text" id="email" name="email" placeholder="number" onblur="validate(3)"/> 
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex">
                                        <label class="form-control-label px-3">Office Location<span class="text-danger"> *</span></label> 
                                        <textarea type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="form-group col-sm-6 pt-5">
                                        <p  class="btn btn-primary w-100" onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>Add Employee</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddNewEmployee;