import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
// import './App.css';
import './index.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/app';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import Entercard from './components/Entercard';
import Profile from './components/Profile';
import Activate from './components/Activate';








// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAhPOXUfrC9Uj5NvB6cfw9024IdX6NptWk",
    authDomain: "superchat-3b012.firebaseapp.com",
    projectId: "superchat-3b012",
    storageBucket: "superchat-3b012.appspot.com",
    messagingSenderId: "970864725872",
    appId: "1:970864725872:web:495f430f130a62fb3b09b5",
    measurementId: "G-96WZSRZ85Y"
    //BSCS-chatroom
    // apiKey: "AIzaSyBsGk7xIVgWLpNi-IVTNYJU7R5S-yrCwoY",
    // authDomain: "bscs-chat.firebaseapp.com",
    // projectId: "bscs-chat",
    // storageBucket: "bscs-chat.appspot.com",
    // messagingSenderId: "439382324864",
    // appId: "1:439382324864:web:b4332f989abf9496549865",
    // measurementId: "G-F1HSJQRDWP"
  });
} else {
  firebase.app(); // if already initialized, use that one
}
//


export default function App() {
  const [user,
    // loading,err
  ] = useAuthState(firebase.auth());
  if (user) {
    // console.log("my user ", user.emailVerified)
  }


  return (<>
    <div className="App" >



      {user ? user.emailVerified ? <Profile /> : <Activate /> : <Entercard />}



    </div>



  </>)
}











// const [user,loading,error]=useAuthState(firebase.auth())
//   if (loading) {
//     return (
//       <div>
//         <p>Initialising User...</p>
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }
//   if (user) {
//     return (
//       <div>
//         <p>Current User: {user.email}</p>
//         <button >Log out</button>
//       </div>
//     );
//   }
