import React from 'react';
import {Row,Col,Collapse,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function ExistingEmployee() {
    
    return (
        
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
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
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
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
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

    )
}