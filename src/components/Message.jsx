import React from 'react';
import firebase  from 'firebase/app';
// import unnamed from './unnamed.png';
import  {FiDelete} from 'react-icons/fi'

export default function Message(props){
    const {text,id,photoURL}=props.message;
    // console.log("message User",props.user)
// const URL=firebase.auth().currentUser.photoURL;
    // console.log("photo URL",firebase.auth().currentUser.photoURL)
    
    
    const messageClass=id=== firebase.auth().currentUser.uid?'sent':'received';

    const deleted=async (e)=>{
        e.preventDefault()
        alert("Delete button is not working yet")
console.log("id",props.id)
        // console.log("this is msg id",id)
    }
    return (<>
    
    <div className={`message ${messageClass}`}>
        {props.user?<img src={photoURL} />:null}
   <p>{text}</p>{messageClass=="sent"?<a onClick={(e)=>props.msgDelete(props.id,e)}><FiDelete style={{color:"white"}}/></a>:null} 
        </div>
    </>)
}
// (event)=>deleted(event)