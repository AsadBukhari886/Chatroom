import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import M from 'materialize-css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
import auth from 'firebase/app';
import { Modal } from 'react-responsive-modal';
import CreateUserCollection from '../manageData/Firebase_collections.jsx';
import Checkbox from "react-custom-checkbox";
import { useAuthState } from 'react-firebase-hooks/auth';



 


  

function POPUP() {
  const [user,
    // loading,err
  ] = useAuthState(firebase.auth());
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [name, setName] = useState('')
  const [pType,setPType]=useState("password")
  
  const [
    createUserWithEmailAndPassword
  ] = useCreateUserWithEmailAndPassword(auth);
  const [
    signInWithEmailAndPassword
  ] = useSignInWithEmailAndPassword(auth, email, password);

  //showPassword function
  // const showPassword=()=>{
  //   console.log("password show")
  // }

  const myFunction=()=>{
    console.log("clicked")
  }
  // signup function
    const Signup = async () => {
    try {
    
    
      
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
     await result.user.sendEmailVerification()
     .then(
       console.log("email.sent"),
       alert("verification email sent to your account")
           )
     await firebase.auth().currentUser.updateProfile({
        displayName:"user"
      })
      // console.log("result",result.user)
      if(result.user){
        // console.log('result user.displayname: ',result.user)
      
      }
      CreateUserCollection(result.user);

      setOpen(false);
      setEmail("");
      setPassword("")
    

    } 
    catch (err) {
      M.toast({html: `${err}`, classes: 'red'})
      console.log("error",err.message)
    }
   

    
  };
 
  // modal
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  //return method 
  return (<>
    <div>
      <button onClick={onOpenModal}>Sign Up</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Create Account with email and password</h2>


        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Email</label>

        <input type={pType} name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Password</label><br />
        <Checkbox
            style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#174A41",
                alignSelf: "stretch",}}
            label="Show Password"
            onChange={(value) => {
       if(pType=="password"){
        setPType("text")
       }else{
        setPType("password")
       }
        
        }}
        onClick={myFunction}
        />

        <button onClick={Signup}>Create</button>

      </Modal>
    </div>
  </>)
  }





export default POPUP;