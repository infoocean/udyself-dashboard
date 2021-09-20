import React from 'react';
import { Navbar, Nav, Dropdown, Collapse} from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router';
import brandlogo from './MyComponents/img/logo.jpeg';

// import { Collapse } from 'bootstrap'
export default function Header() {

    const [login, setLogin] = useState(false);
    const [open, setOpen] = useState(false);
    const history=useHistory();
     
    //user validation login or logout fetch data from localstorage user

    //let user_active = JSON.stringify(localStorage.getItem('user'));
    //console.log(useractive);

    //let user=localStorage.getItem('user');
    //console.log(user);
    //let uservalidation =JSON.stringify(user);
    //console.log(uservalidation); 

    let userinfo=JSON.parse(localStorage.getItem('user'));
    //console.log(userinfo);

    const logout=()=>{
        //console.log('hii');
        localStorage.clear();
        history.push('/login');
    }

    return (
        <>
        <div className="header" >
            <Navbar id="topnav"  expand="lg" bg="" variant="dark" style={{height:"60px"}}>
                {/* <Container> */}
                <Navbar.Brand id="nav-brand" href="#home" className="ms-5"><img src={brandlogo} alt="" width="80px"/></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Navbar id="responsive-navbar-nav" style={{color:"white"}}>
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets"
                     onClick={() => {setOpen(!open);setLogin(false)}}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}><i class="fas fa-bell"></i> Notification</Nav.Link>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <Dropdown.Item href="#/action-1">
                                <div id="notification">
                                    <div className="icon"><i class="fas fa-comment-alt"></i></div>
                                    <div className="content">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing</h6>
                                        <p className="text-justify">dolor sit amet consectetur adipisicing elit. Pariatur </p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <div id="notification">
                                <div className="icon"><i class="fas fa-comment-alt"></i></div>
                                    <div className="content">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing</h6>
                                        <p className="text-justify">dolor sit amet consectetur adipisicing elit. Pariatur </p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <div id="notification">
                                    <div className="icon"><i class="fas fa-comment-alt"></i></div>
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
                    <div className="bg-primary picon text-center" style={{color:"white"}} onClick={()=>{setLogin(!login);setOpen(false)}} aria-controls="example-collapse-text-2"
                    aria-expanded={login}><i class="fas fa-user-tie"></i></div> 
                    </Nav.Link>
                    <Collapse in={login}>
                        <div id="example-collapse-text-2">
                            <Dropdown.Item>Shubham</Dropdown.Item>
                            <Dropdown.Item>My Profile</Dropdown.Item>
                            <Dropdown.Item>My Cart</Dropdown.Item>
                            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </div>
                    </Collapse>
                    <Nav.Link onClick={logout} >Logout</Nav.Link>
                    </Nav>
                </Navbar>
            {/* </Container> */}
            </Navbar>
        </div>
    </>
    );
};