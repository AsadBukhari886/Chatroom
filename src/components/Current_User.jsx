import React, { useState } from 'react';
import firebase from 'firebase/app'
import { useAuthState } from 'react-firebase-hooks/auth';
import Chatbox from './Chatbox';




export default function CurrentUser  () {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('')

const googleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const [user,
    //  loading,
      error] = useAuthState(firebase.auth());
  // console.log("feed user",user)

//   if (loading) {
//     return (
//       <div>
//         <p>Initialising User...</p>
//       </div>
//     );
//   }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
   if (user) {
       return <Chatbox user={user}/>
   }

  return (<> 
  <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
  <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
   <button onClick={googleLogin}>Log in</button>;
   
    
    </>)
};
