import React from 'react';
import { Navbar, Nav, Dropdown, Collapse} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faBell, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import './Style.css';
import { useState } from 'react';

// import { Collapse } from 'bootstrap'
export default function Header() {

    let [login, setLogin] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className="header" >
            <Navbar id="topnav"  expand="lg" bg="" variant="dark" style={{height:"60px"}}>
                {/* <Container> */}
                <Navbar.Brand id="nav-brand" href="#home" className="ms-5">wekashi</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Navbar id="responsive-navbar-nav" style={{color:"white"}}>
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets"
                     onClick={() => {setOpen(!open);setLogin(false)}}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}> <FontAwesomeIcon icon={faBell} /> Notification</Nav.Link>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <Dropdown.Item href="#/action-1">
                                <div id="notification">
                                    <div className="icon"><FontAwesomeIcon icon={faCommentAlt}/></div>
                                    <div className="content">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing</h6>
                                        <p className="text-justify">dolor sit amet consectetur adipisicing elit. Pariatur </p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <div id="notification">
                                <div className="icon"><FontAwesomeIcon icon={faCommentAlt}/></div>
                                    <div className="content">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing</h6>
                                        <p className="text-justify">dolor sit amet consectetur adipisicing elit. Pariatur </p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <div id="notification">
                                    <div className="icon"><FontAwesomeIcon icon={faCommentAlt}/></div>
                                        <div className="content">
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing</h6>
                                            <p className="text-justify">dolor sit amet consectetur adipisicing elit. Pariatur </p>
                                        </div>
                                </div>
                            </Dropdown.Item>
                        </div>
                    </Collapse>

                    {/* <Nav.Link href="#deets"> <FontAwesomeIcon icon={faCoffee} /> More deets</Nav.Link> */}
                    <Nav.Link eventKey={2} >
                    <div className="bg-primary picon" style={{color:"white"}} onClick={()=>{setLogin(!login);setOpen(false)}} aria-controls="example-collapse-text-2"
                    aria-expanded={login}><FontAwesomeIcon icon={faUserTie} /> </div> 
                    </Nav.Link>
                    <Collapse in={login}>
                        <div id="example-collapse-text-2">
                            <Dropdown.Item>My Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </div>
                    </Collapse>
                    </Nav>
                </Navbar>
            {/* </Container> */}
            </Navbar>
        </div>
    </>
    );
};