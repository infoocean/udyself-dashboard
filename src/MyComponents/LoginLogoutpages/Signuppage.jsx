import React from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import brandlogo from '../img/logo.jpeg';

const Signuppage=() =>{

    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState("");
    const [number, setnumber] = useState('');
    const [password, setpassword] = useState('');

    const history = useHistory();

    const fullnamehandle=(e)=>{
        setfullname(e.target.value);
    }
    const emailhandle=(e)=>{
        setemail(e.target.value);
    }
    const numberhandle=(e)=>{
        setnumber(e.target.value);
    }
    const passwordhandle=(e)=>{
        setpassword(e.target.value);
    }

     const Inputdata = async (e) =>{
        e.preventDefault();
        //console.warn(fullname,email,number,password);
        let inputdata={fullname,email,password,number};
        //console.warn(inputdata);
        //alert(inputdata.fullname);
        let result = await fetch("https://wekassiauthapi.herokuapp.com/api/register", { 
                 method:'POST',
                 headers:{
                     "Content-Type":"application/json",
                     "Accept":"application/json"
                 },
                 body:JSON.stringify(inputdata)
               }
            );
            result = await result.json();

            console.warn(result);

            localStorage.setItem("user-info", JSON.stringify(result));

            history.push('/');
    };

        return (
            <div class="container-box">
                <div class="form--user__icon">
                    <div class="icon--img">
                        <span class="glyphicon glyphicon-user"><img  className="imgs" src= {brandlogo} /></span>
                    </div>
                </div>
                <h4 class="text-center">SignUp Form</h4>
                <form>
                    <div class="form-group">
                        <label className="my-2" for="fullname"> <span class="glyphicon glyphicon-user"></span> Full Name : </label>
                        <input type="text" class="form-control" value={fullname} onChange={fullnamehandle} id="fullname" placeholder="Enter Full Name" name="fullname"/>
                    </div>
                    <div class="form-group">
                        <label className="my-2" for="email"> <span class="glyphicon glyphicon-user"></span> Email ID :</label>
                        <input type="email" class="form-control" value={email} onChange={emailhandle} id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div class="form-group mt-2">
                        <label className="my-2" for="number"> <span class="glyphicon glyphicon-user"></span> Mobile Number :</label>
                        <input type="text" class="form-control" value={number} onChange={numberhandle} id="number" placeholder="Enter Mobiole Number" name="number"/>
                    </div>
                    <div class="form-group mt-2">
                        <label className="my-2" for="password"> <span class="glyphicon glyphicon-lock"></span> Password :</label>
                        <input type="password" class="form-control" value={password} onChange={passwordhandle} id="password" placeholder="Enter password" name="password"/>
                    </div>
                    <div className="mt-4">
                        <button type="submit" name="submit" onClick={Inputdata} class="btn btn-default formbutton">Submit</button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Allready Registred? <a href="/"><span>Login</span></a></span>
                    </div>
                </form>
            </div>
        );
};
export default Signuppage;