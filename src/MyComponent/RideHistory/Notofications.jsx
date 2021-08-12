import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faBell, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const Notifications=()=>{
    return(
        <>
            <div className="Notification p-5" style={{textAlign:'justify' , cursor:'pointer'}}>
                <p style={{color:'blue'}}><FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing. dolor sit amet consectetur adipisicing.</p>
                <p  style={{color:'blue'}}> <FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing. dolor sit amet consectetur adipisicing.</p>
                <p  style={{color:'blue'}}> <FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing. dolor sit amet consectetur adipisicing.</p>
            </div>  

        </>
    )
}
export default Notifications;