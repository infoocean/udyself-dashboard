import React from 'react';
import {Row,Col  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBullseye,faUser,faCartPlus,faDollarSign} from '@fortawesome/free-solid-svg-icons';
// import {DashboardLayout} from './Layout';

const HomePage = () => {
  return (
    <>
      <h3 id='dashboard'>Dashboard Menu</h3>
        <Row>
            <Col md={3} sm={6}>
                <div className="top top-1">
                    <div className="icon"><FontAwesomeIcon icon={faBullseye} size="2x" /></div>
                    <div className="summ"><h4>18090</h4>
                    <h6>Visit Today</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6}>
                <div className="top top-2">
                <div className="icon"><FontAwesomeIcon icon={faUser} size="2x" /></div>
                    <div className="summ"><h4>180</h4>
                    <h6>New User</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6}>
                <div className="top top-3">
                <div className="icon"><FontAwesomeIcon icon={faCartPlus} size="2x" /></div>
                    <div className="summ"><h4>18090</h4>
                    <h6>New Orders</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6}>
                <div className="top top-4">
                <div className="icon"><FontAwesomeIcon icon={faDollarSign} size="2x" /></div>
                    <div className="summ"><h4>$18090</h4>
                    <h6>Total Sales</h6></div>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default HomePage;