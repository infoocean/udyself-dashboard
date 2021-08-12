import React from 'react';
import {Row,Col,Collapse,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ExistingEmployee() {

    const [open, setOpen] = useState(false);
    
    return (
        <>

        <div className="editpart">
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
                                            <input id="origin-input" class="controls" type="text" placeholder="Rewa Indore MP"/>
                                        </div>
                                    </div>
                                    <div class="form-group pt-2">
                                        <div class="col-md-10 col-md-offset-1 w-100">
                                            <input id="destination-input" class="controls" type="text" placeholder="Bhopal India Mp"/>
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
                                            <button type="submit" class="btn btn-primary w-100">Confirm</button>
                                        </div>
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
        
        <div className="query-table">
          <h4>All My Existing Employee</h4>
        <div id="deletebox">       
            <h4>Are You Sure To Delete!</h4>
            <button className="btn" onClick={(e) =>{
                document.querySelector("#deletebox").classList.remove('click')
                }}>YES</button>
          <button className="btn" onClick={(e) =>{
                document.querySelector("#deletebox").classList.remove('click')
                }}>No</button>
        </div>

        <table class=' mt-4 table table-bordered table-condensed table-striped table-hover'>
            <thead>
                <tr>
                   <th>SE NO</th>
                   <th>Emp Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Number</th>
                   <th>Address</th>
                   <th>Joining Date / Time</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>1</td>
                    <td>0186CS171099</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Rewa MP</td>
                    <td>05-12-2015 / 2:44</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"  onClick={() => setOpen(!open)} aria-controls="example-collapse-text"
                     aria-expanded={open}><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>2</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Rewa MP</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>3</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Rewa MP</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning" onClick={(e) =>{
                    document.querySelector("#editboxDriver").classList.add('clickedit');}}><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>4</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Rewa MP</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>5</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Rewa MP</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>6</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Rewa MP</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
    )
}