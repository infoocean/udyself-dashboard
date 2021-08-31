import React from 'react';
import {Link} from 'react-router-dom';
import brandlogo from './MyComponent/img/logo.jpeg';

const Createaccount=()=>{
    return(
        <>
        <div class="container-box">
        <div class="form--user__icon">
            <div class="icon--img">
                <span class="glyphicon glyphicon-user"><img  className="imgs" src= {brandlogo} /></span>
            </div>
        </div>
        <h4 class="text-center">Login Form</h4>
        <form>
            <div class="form-group">
                <label className="my-2" for="email"> <span class="glyphicon glyphicon-user"></span> Email ID:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
            </div>
            <div class="form-group mt-2">
                <label className="my-2" for="pwd"> <span class="glyphicon glyphicon-lock"></span> Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
            </div>
            <div className="d-flex mt-3">
            <a href="/"><Link to="/forgatpassword">Forget Password</Link></a>
            </div>
            <div className="mt-3">
                <button type="submit" class="btn btn-default formbutton">Submit</button>
            </div>
            <div className="mt-3 text-center">
            <span>New User? <a href="/"><Link to="/createaccount">Create Account</Link></a></span>
            </div>
        </form>
    </div>
        </>
    );
};
export default Createaccount;