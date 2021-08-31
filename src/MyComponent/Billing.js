import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {Row,Col,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

const Billing =()=>{

    return(
    <>
        <div className="billing-section">
            <h5 className="text-center">Search Your Billing History</h5> 
            <div id="QueryForm">
            <Form>
                <Row>
                <Col md={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Select Date From :
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="date"/>
                    </Col>
                </Form.Group>
                </Col>
                <Col md={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label className='add-labels mt-3' column sm="12">
                    Select Date To :
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="date" />
                    </Col>
                </Form.Group>
                </Col>
                <span className="text-center mt-3" >_________________________ OR __________________________</span>
                <Col md={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label className='add-labels mt-3' column sm="12">
                    Select With Particular Ride
                    </Form.Label>
                    <Col sm="12">
                     <select >
                         <option hidden>Select Ride Id</option>
                         <option>18CS17111099</option>
                         <option>18CS17111099</option>
                         <option>18CS17111099</option>
                         <option>18CS17111099</option>
                         <option>18CS17111099</option>
                         <option>18CS17111099</option>
                         <option>18CS17111099</option>
                         <option>18CS17111099</option>
                     </select>
                    </Col>
                </Form.Group>
                </Col>
                </Row>
                <Form.Group as={Row} className="mb-3 mt-4" controlId="formPlaintextEmail">
                    <Col md={4}></Col>
                    <Col md="3" align="center">
                    <Form.Control className="btn" type="submit" value="Search" onClick={(e)=>{
                        e.preventDefault();
                    }}/>
                    </Col>
                </Form.Group>
            </Form>
            </div>
            <h4 className="title mt-3">Our Billing History</h4> 
            <table id="table-to-xls" class='mt-4 table table-bordered table-condensed table-striped table-hover text-center'>
                <thead>
                <tr>
                   <th>SE NO</th>
                   <th>Billing Id</th>
                   <th>Pickup</th>
                   <th>Drop</th>
                   <th>Billing Ammount</th>
                   <th>Billing Date</th>
                   <th>Billing Time</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>1</td>
                    <td onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                    }}>0186CS171099</td>
                    <td>Bhopal</td>
                    <td>Indore</td>
                    <td>3000</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
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
                    <td>Bhopal</td>
                    <td>Pune</td>
                    <td>13000</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
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
                    <td>JabalPur</td>
                    <td>Indore</td>
                    <td>3000</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>4</td>
                    <td>0186CS171099</td>
                    <td>Bangalore</td>
                    <td>Indore</td>
                    <td>3000</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>5</td>
                    <td>0186CS171099</td>
                    <td>Rewa</td>
                    <td>Indore</td>
                    <td>3000</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                </tbody>
            </table>

            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-primary"
                    table="table-to-xls"
                    filename="BillingHistory"
                    sheet="billing"
                    buttonText="print"/>
        
            <div id="deletebox" className="text-center">       
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
export default Billing;