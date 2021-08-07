import React, { useState } from 'react';
import M from 'materialize-css';
// import auth from 'firebase/app';
import { Modal } from 'react-responsive-modal';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
// import Forgotpassword from './Forgotpassword';

function Login() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // const func=()=>{
  //   console.log("email sent")
  // }

  //Login method
  const login = async (e) => {
    e.preventDefault();
    try {
      
      console.log("this is try portion")
      // const signin=
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setOpen(false);
      setEmail('');
      setPassword('')
    } catch (err) {
      console.log("error", err.message)
// alert(err) 
M.toast({html: `${err}`, classes: 'red'})

    }
  };
  //password forgot
 async function Forgotpassword(event){
   event.preventDefault()
  //  const result=
   await firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
      console.log("updater sent to your email")
      alert("email sent to your provided address")
    })
    .catch((error) => {
      // var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error)
      alert(errorMessage)
      // ..
    });
}
  return (<>
    <div>
      <button onClick={onOpenModal}>Login</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Login with email and password</h2>

        {/* <input type="text" />
       <label>Name</label> */}

        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Email</label>

        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Password</label><br />
        <label onClick={(event)=>Forgotpassword(event)} style={{cursor: 'pointer'}}>forgot password</label >

        <button onClick={login}>login</button>

      </Modal>
    </div>
  </>)

}
export default Login;
