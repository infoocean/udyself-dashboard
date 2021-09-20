import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Dashboard() {

    const history=useHistory();

    //let user=JSON.parse(localStorage.getItem('user'));
    //console.log(user);

    useEffect(() => {
     if (localStorage.getItem('user')) {
         //dashboard
        }else{
            history.push('/login');
        }
    }, [])

    return (
        <div className="dashboard">
           {/*Header componemt*/}
           <Header/>
           <Sidebar/>
        </div>
    )
}

