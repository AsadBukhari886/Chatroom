import React from 'react';
import { FaBars } from 'react-icons/fa';


// import auth from 'firebase/app';
// import * as Icon from "react-icons/fi";
// import funny from '../manageData/funny.jpg';
// import unnamed from './unnamed.png'
import { useHistory } from 'react-router';



export default function Home() {
    const history=useHistory()
    
    function handleClick() {
        history.push("/chatbox");
      }
    return (<>
        <h4>Homepage <FaBars/></h4>
        Welcome to BSCS chatroom.<br/>
        <button onClick={handleClick}>Chatbox</button>
        
        
            <div className="footer">
            © 2021 AsadBukhari. All rights reserved.
        </div >
    </>)
}