import React from 'react';

const TimingDetails=()=>{
    return(
        <>
        <div className=" container timing-details text-text-center p-5">
          <div className="inertext d-flex justify-content-between">
            <div className="pickup" style={{textAlign:'left'}}>
              <span><b><i class="fas fa-street-view"></i> Pickup Location : </b>NRk Business Park Vijay Nagar Indore</span><br/>
              <span><b><i class="far fa-clock"></i> Pickup Time : </b>7:30 AM</span>
            </div>
            ....................................................
            <div className="drop" style={{textAlign:'left'}}>
              <span><b> <i class="fas fa-map-marker-alt"></i> Drop Location : </b>Bhavarkua Pitampur Road  Indore </span><br/>
              <span><b><i class="far fa-clock"></i> Dro Time : </b>11:30 AM</span>
            </div>
          </div>
          <div className="mt-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29466.89628506083!2d75.68912279999999!3d22.602952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962570a2a300d0f%3A0x5d2f1244bf40c7f0!2sBhagyoday%20hospital%20Sagar!5e0!3m2!1sen!2sin!4v1628802971879!5m2!1sen!2sin"
           width="950" height="185" style={{border:'1px solid black'}} allowfullscreen="" loading="lazy"></iframe>
           </div>
        </div>
        
        </>
    )
}
export default TimingDetails;