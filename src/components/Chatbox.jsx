import React, { useState, useRef } from 'react';
// import Log_out from './Logout';
import firebase from 'firebase/app';
// import auth from 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';

export default function Chatbox(props) {
    // const [text, setText] = useState('');
    const [input, setInput] = useState("");
    const messageRef = firebase.firestore().collection("message");
    const query = messageRef.orderBy("createdAt").limit(50)
    const [messages] = useCollectionData(query)
    const ref = useRef()


    const clicker = (e) => {
        e.preventDefault()
        const photo_url = firebase.auth().currentUser.photoURL;
        // console.log("photo URL in chat box ",photo_url)
        var id = firebase.auth().currentUser.uid;
        // console.log("this is ref current:",ref)
        // console.log("ref body",ref.current)
        // var store=firebase.firestore().collection('message');
        if (input !== '') {

            messageRef.add({
                text: input,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                photoURL: photo_url,
                id
            })
        }
        setInput('')
        // ref.current="this  is div"
        console.log("ref value", ref.current)
        ref.current.scrollIntoView({behavior:"smooth"})

    }
    const changer = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'input') {
            setInput(value);
        }
    }

    // var id = 0;
    // var showID = id + 1;
    const msgDelete=(id,e)=>{
        e.preventDefault()
        alert("Delete button is not working yet")
        // console.log("nott working yet")

        messages.filter((value,index,arr)=>{
            return index!==id
        })
    }
    return (<>
  {/* max-width: 728px; */}
        <div style={{ backgroundColor: "black", marginBottom: "40px" ,maxWidth:"728px",margin:"0 auto",alignItems:"center",marginTop:"0px"}}>
            {/* <Log_out /> */}
            <main>
            {messages && messages.map((val, index) => {
                return <Message 
                message={val} 
                key={index} 
                user={props.user}
                id={index}
                msgDelete={msgDelete}
                 />

            })}
            <p></p>
             <div ref={ref}></div>
            </main>
           


            {/* <div style={{ display: "flex" }}> */}
            <form>
                <input type="text" name="input" onChange={changer} value={input} style={{ backgroundColor: 'white' }} />
                <button type="submit" onClick={clicker}>🐤</button>
            </form>
            {/* </div> */}
        </div>
    </>)
}



/* const id=firebase.auth().currentUser.uid;
    console.log("id",id)
   var store= firebase.firestore().collection("message")
    .doc("1srJkzYqWmFBSAKeJ2Kg");
   store.onSnapshot((docs)=>{
       var data=docs.data()
if(data){
    setMessage(data.text)
    console.log(data.text)
}else{
    console.log("no data found")
}
    })

    retriever of data

    store.onSnapshot((doc)=>{
    var data=doc.data();
    console.log(data.text);
    setText(data.text)
})

    */