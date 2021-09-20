import React from 'react';
import {Row,Col  } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <h3 id='dashboard'>Dashboard Menu</h3>
        <Row>
            <Col md={3} sm={6}>
                <div className="top top-1">
                    <div className="icon"><i class="fas fa-bullseye fa-2x"></i></div>
                    <div className="summ"><h4>18090</h4>
                    <h6>Visit Today</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6}>
                <div className="top top-2">
                <div className="icon"><i class="fas fa-user fa-2x"></i></div>
                    <div className="summ"><h4>180</h4>
                    <h6>New User</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6}>
                <div className="top top-3">
                <div className="icon"><i class="fas fa-cart-plus fa-2x"></i></div>
                    <div className="summ"><h4>18090</h4>
                    <h6>New Orders</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6}>
                <div className="top top-4">
                <div className="icon"><i class="fas fa-dollar-sign fa-2x"></i></div>
                    <div className="summ"><h4>$18090</h4>
                    <h6>Total Sales</h6></div>
                </div>
            </Col>
        </Row> 
    </>
  )
}

export default HomePage;