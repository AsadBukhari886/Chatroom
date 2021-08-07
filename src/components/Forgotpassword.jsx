import firebase from 'firebase/app';


export default function Forgotpassword(email){
    console.log("your are clicking forgot password")
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
      console.log("updater sent to your email")
    })
    .catch((error) => {

      console.log(error)
      alert(error.message)
      // ..
    });
}