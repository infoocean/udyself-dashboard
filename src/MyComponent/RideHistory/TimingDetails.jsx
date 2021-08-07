import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

const TimingDetails=()=>{
    return(
        <>
        <div className="timing-details text-text-center pt-5">
          <div className="inertext ">
            <span><b><FontAwesomeIcon icon={faMapMarked} /> Pickup Location : </b>NRk Business Park Vijay Nagar Indore</span><br/>
            <span><b>Pickup Timing : </b>7:30 AM</span><br/><br/>
            <span><b><FontAwesomeIcon icon={faMapMarked} /> Drop Location : </b>Bhavarkua Pitampur Road  Indore </span><br/>
            <span><b>Drop Time : </b>11:30 AM</span>
         </div>
        </div>
        </>
    )
}
export default TimingDetails;