import React from 'react';
import brandlogo from '../img/logo.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
import {BrowserRouter, Link, useHistory} from 'react-router-dom';

export default function Loginpage() {
 
    const [username, setemail] = useState('');
    const [password, setpassword] = useState('');    
    const history= useHistory();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            history.push('/dashboard');
        }else{
            //same page
        }
    }, []);

   
    const HandleEmail=(e)=>{
         setemail(e.target.value);
    }
    const HandlePassword=(e)=>{
         setpassword(e.target.value);
    }
    
    async function Inputdata(event){
        event.preventDefault();
        //console.warn(username,password);
        let inputdata = {username, password};
        let result = await fetch('https://wekassiauthapi.herokuapp.com/api/login/', {
                                method:"POST",
                                headers:{
                                    "Content-Type":"application/json",
                                    "Accept":"application/json"
                                },
                                body:JSON.stringify(inputdata)
                            }
                        );

                        //console.log(result);
                        result = await result.json();
                        localStorage.setItem("user", JSON.stringify(result));
                        history.push('/dashboard');
    };

    return (
    <BrowserRouter>
    <div className="container-box">
        <div className="form--user__icon">
            <div className="icon--img">
                <span class="glyphicon glyphicon-user"><img  className="imgs" src={brandlogo}/></span>
            </div>
        </div>
        <h4 className="text-center mt-2">Login Form</h4>
        <form>
        <div className="form-group">
             <div className="" style={{textAlign:'left'}}>
                <label className="my-2" style={{textAlign:'left'}} for="email"> <span className="glyphicon glyphicon-user"></span> Email ID :</label>
            </div>
            <input type="email" name="email" value={username} onChange={HandleEmail} className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group mt-2">
            <div className="" style={{textAlign:'left'}}>
                <label className="my-2" for="pwd"> <span className="glyphicon glyphicon-lock"></span> Password :</label>
            </div>
            <input type="password" name="password" value={password} onChange={HandlePassword}  className="form-control"  id="password" placeholder="Enter password" />
        </div>
        <div className="d-flex mt-3">
            <a href="/"><Link to="/forgatpassword">Forget Password</Link></a>
        </div>
        <div className="mt-3">
            <button type="submit" onClick={Inputdata} name="submit" className="btn btn-default formbutton">Submit</button>
        </div>
        </form>
    </div>
    </BrowserRouter>
    );
};


   