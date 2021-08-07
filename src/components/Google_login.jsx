import firebase from 'firebase/app';


export default async function Google_logger() {

    try {
        var provider = new firebase.auth.GoogleAuthProvider();
        const result=firebase.auth().signInWithPopup(provider);
        console.log(result.message)
    } catch (err) {
        console.log(err.message)
     }
}