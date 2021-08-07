
import firebase from 'firebase/app';




export default function Activate(){

    const user=firebase.auth().currentUser;
  

    const Signin=()=>{
        firebase.auth().signOut();
    }
    return(<>
    <h3>Activation</h3>
    We have sent email to your provided email adress.Check your mailbox to activate your account.
    After activate account,refresh this page to enter.
    Thank you
    <br/>
    <br/>
    <button onClick={Signin}>Go back to Sign in page</button>
        </>)
}