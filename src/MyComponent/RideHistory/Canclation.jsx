import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const Canclation=()=>{
    return(
        <>
        <div className="canclation p-5">
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
              Enter Your Message :
              </Form.Label>
              <Col sm="12">
              <textarea  placeholder="Enter message here"></textarea>
              </Col>
          </Form.Group>
          </Col>
          </Row>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Col md={4}></Col>
              <Col md="3" align="center">
              <Form.Control className="btn" type="submit" value="Cancel" onClick={(e)=>{
                  e.preventDefault();
              }}/>
              </Col>
          </Form.Group>
      </Form>
        </div>
        </>
    )
}
export default Canclation;