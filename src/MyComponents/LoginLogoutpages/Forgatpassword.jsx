import React from 'react';
import { useState } from 'react';
import brandlogo from '../img/logo.jpeg';

const Forgatpassword=()=>{
    
    const [number, setnumber] = useState('');
    const [email, setemail] = useState('');
    
    const numberhandle=(e)=>{
        setnumber(e.target.value);
    }
    const emailhandle=(e)=>{
        setemail(e.target.value);
    }

    const Inputdata=(e)=>{
        e.preventDefault();
        //console.warn(email,number);

    }
  
    return(
        <>
        <div class="container-box">
        <div class="form--user__icon">
            <div class="icon--img">
                <span class="glyphicon glyphicon-user"><img  className="imgs" src= {brandlogo} /></span>
            </div>
        </div>
        <h4 class="text-center mt-2">Forgat Password</h4>
        <form>
            <div class="form-group mt-3">
                <label className="my-2" for="number"> <span class="glyphicon glyphicon-user"></span> Enter Registred Mobile Number :</label>
                <input type="text" class="form-control" value={number} onChange={numberhandle} id="number" placeholder="Enter Number" name="number"/>
            </div>
            <div class="form-group mt-2">
                <label className="my-2" for="email"> <span class="glyphicon glyphicon-user"></span> Enter Registred Email Id :</label>
                <input type="email" class="form-control" value={email} onChange={emailhandle} id="email" placeholder="Enter email" name="email"/>
            </div>
            <div className="mt-4">
                <button type="submit" name="submit" onClick={Inputdata} class="btn btn-default formbutton"> Send OTP </button>
            </div>
        </form>
    </div>
        </>
    );
};
export default Forgatpassword;