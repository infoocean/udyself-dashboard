import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function AddNewEmployee(){
    return(
        <>
        <div className="myform">
            <div class="container-fluid px-1 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11">
                        <h4><span>Add New Employee</span></h4>
                        <div class="form pt-4">
                            <form class="form-card" onsubmit="event.preventDefault()">
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex">
                                        <label class="form-control-label">Employee Name<span class="text-danger"> *</span></label>
                                        <input type="text" id="name" name="name" placeholder="name" onblur="validate(1)"/>
                                    </div>
                                    <div class="form-group col-sm-6 flex-column d-flex text-left"> 
                                        <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> 
                                        <input type="text" id="email" name="email" placeholder="email" onblur="validate(2)"/>
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> 
                                        <label class="form-control-label px-3">Enter Number<span class="text-danger"> *</span></label> 
                                        <input type="text" id="email" name="email" placeholder="number" onblur="validate(3)"/> 
                                    </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> 
                                        <label class="form-control-label px-3">Joining Date<span class="text-danger"> *</span></label> 
                                        <input type="text" id="mob" name="mob" placeholder="00-00-0000" onblur="validate(4)"/> 
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex">
                                        <label class="form-control-label px-3">Travel Agency Name<span class="text-danger"> *</span></label> 
                                        <input type="text" id="job" name="job" placeholder="Agency name" onblur="validate(5)"/>
                                    </div>
                                    <div class="form-group col-sm-6 flex-column d-flex">
                                        <label class="form-control-label px-3">Enter Ammount<span class="text-danger"> *</span></label> 
                                        <input type="text" id="job" name="job" placeholder="Ammount" onblur="validate(5)"/>
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex">
                                        <label class="form-control-label px-3">Employee Address<span class="text-danger"> *</span></label> 
                                        <textarea type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="form-group col-sm-6 pt-3">
                                        <input type="submit" name="submit" value="Add Employee" class="btn btn-primary"/>
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