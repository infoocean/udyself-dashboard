import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faBell, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const Notifications=()=>{
    return(
        <>
            <div className="Notification p-5" style={{textAlign:'justify'}}>
                <p> <FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing. dolor sit amet consectetur adipisicing.</p>
                <p> <FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing. dolor sit amet consectetur adipisicing.</p>
                <p> <FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing. dolor sit amet consectetur adipisicing.</p>
            </div>  

        </>
    )
}
export default Notifications;