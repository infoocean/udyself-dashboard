import React from 'react';
import './Login.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { useState } from 'react';

const Loginform=()=>{

    const [email, setemail] = useState('');
    const [password, setpassword]=useState('');
    const [allenrty, setallentry]=useState([]);

    const emailhandler=(e)=>{
        setemail(e.target.value);
    }
    const passwordhandler=(e)=>{
        setpassword(e.target.value);
    }

    const formvalidation=(evemt)=>{
          evemt.preventDefault();
          const newentry = {email : email, password: password};
          setallentry([...allenrty, newentry]);
    }
    return (
        <>
        <div className="container-box">
        <div className="form--user__icon">
            <div className="icon--img">
                <span className="glyphicon glyphicon-user"></span>
            </div>
        </div>
        <h4 className="text-center">Login Form</h4>
        <form onSubmit={formvalidation}>
            <div className="form-group">
                <label className="my-2" for="email"> <span className="glyphicon glyphicon-user"></span> Email ID:</label>
                <input type="email" name="email" className="form-control" value={email} onChange={emailhandler} id="email" placeholder="Enter email" autoComplete="off"/>
            </div>
            <div className="form-group mt-2">
                <label className="my-2" for="pwd"> <span className="glyphicon glyphicon-lock"></span> Password:</label>
                <input type="password" name="password" className="form-control" value={password} onChange={passwordhandler} id="password" placeholder="Enter password"/>
            </div>
            <div className="d-flex mt-3">
            <a href="/"><Link to="/forgatpassword">Forget Password</Link></a>
            </div>
            <div className="mt-3">
                <Link to="/adminpanel"><button type="submit" name="submit" className="btn btn-default formbutton">Submit</button></Link>
            </div>
            <div className="mt-3 text-center">
            <span>New User? <a href="/"><Link to="/createaccount">Create Account</Link></a></span>
            </div>
        </form>
    </div>
    </>   
    );
};
export default Loginform;