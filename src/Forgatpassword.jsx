import React from 'react';
import './Login.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import brandlogo from './MyComponent/img/logo.jpeg';

const Forgatpassword=()=>{
    return(
        <>
        <div class="container-box">
        <div class="form--user__icon">
            <div class="icon--img">
                <span class="glyphicon glyphicon-user"><img  className="imgs" src= {brandlogo} /></span>
            </div>
        </div>
        <h4 class="text-center">Set New Password</h4>
        <form>
            <div class="form-group">
                <label className="my-2" for="email"> <span class="glyphicon glyphicon-user"></span> Enter Registred Mobile Number:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
            </div>
            <div className="d-flex mt-3">
            <div className="mt-3">
                <button type="submit" class="btn btn-default formbutton"> Verify </button>
            </div>
            </div>
        </form>
    </div>
        </>
    );
};
export default Forgatpassword;