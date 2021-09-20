import React from 'react';
import {Row,Col,Form } from 'react-bootstrap';

export default function ContactTravelAgency() {
    return (
      <div className="Contact-section">
      <h5 className="text-center mt-3">Contact Travel Agency</h5> 
      <div id="QueryForm">
      <Form>
          <Row>
          <Col md={12}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label className='add-labels' column sm="12">
              Enter Your Subject
              </Form.Label>
              <Col sm="12">
              <Form.Control type="text" placeholder="Enter Subject"/>
              </Col>
          </Form.Group>
          </Col>
          <Col md={12}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label className='add-labels' column sm="12">
              Select Your Priority
              </Form.Label>
              <Col sm="12">
              <select>
                <option hidden>Select Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              </Col>
          </Form.Group>
          </Col>
          <Col md={12}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label className='add-labels mt-3' column sm="12">
              Enter Your Message :
              </Form.Label>
              <Col sm="12">
              <textarea  placeholder="Enter message here"></textarea>
              </Col>
          </Form.Group>
          </Col>
          </Row>
          <Form.Group as={Row} className="mb-2 mt-3" controlId="formPlaintextEmail">
              <Col md={4}></Col>
              <Col md="3" align="center">
              <Form.Control className="btn" type="submit" value="Contact" onClick={(e)=>{
                  e.preventDefault();
              }}/>
              </Col>
          </Form.Group>
      </Form>
      </div>
      <h4 className="title mt-4 ">Our Old Contact History Details</h4> 
            <table class=' mt-4 table table-bordered table-condensed table-striped table-hover text-center'>
                <thead>
                <tr>
                   <th>SE NO</th>
                   <th>Contact Id</th>
                   <th>Subject</th>
                   <th>Message</th>
                   <th>Date</th>
                   <th>Time</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>1</td>
                    <td>0186CS171099</td>
                    <td>Bus Puncher</td>
                    <td>Indore...</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
                    <td></td>
                    <td>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>2</td>
                    <td>0186CS171099</td>
                    <td>Money</td>
                    <td>Pune...</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
                    <td></td>
                    <td>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><i class="fas fa-trash"></i></button>  
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>3</td>
                    <td>0186CS171099</td>
                    <td>Bus</td>
                    <td>Indore..</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>4</td>
                    <td>0186CS171099</td>
                    <td>Bangalore</td>
                    <td>Indore</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>5</td>
                    <td>0186CS171099</td>
                    <td>Road</td>
                    <td>Indor..e</td>
                    <td>20-22-2029</td>
                    <td>8:00 AM</td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
                </tbody>
            </table>

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
    )
}

