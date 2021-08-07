import firebase from 'firebase/app';
import M from 'materialize-css';
import storage from 'firebase/storage'



export default function Upload_File(e){
    e.preventDefault();
    var file=e.target.files[0];
    console.log('file',file)

    var uid=firebase.auth().currentUser.uid;
    var storageRef=firebase.storage().ref().child(`/console/${uid}/profile`)
    var uploadTask = storageRef.put(file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change es such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if(progress=='100'){
        console.log("uploaded")
        M.toast({html: `uploaded`, classes: 'green',})
        M.toast({html: `refresh page to load image`, classes: 'green',})

    }else{
        console.log("file uploading...")
        M.toast({html: `file uploading...`, classes: 'black',color:'red'})

    }
    // console.log('Upload is ' + progress + '% done');

  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      firebase.auth().currentUser.updateProfile({
        photoURL: downloadURL
    })
    });
  }
);
}