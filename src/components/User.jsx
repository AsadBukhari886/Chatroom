import React, { useState, useEffect } from 'react';
import Card from 'react-card-component'
// import Home from './Home';
import firebase from 'firebase/app';
// import Archeiver from '../manageData/Archeiver';
// import { getDatabase, ref, set } from "firebase/database";
import ProfileUi from 'react-profile-card';
import { Modal } from 'react-responsive-modal';
// import Upload_File from '../manageData/Upload_File.jsx';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import Updater from '../manageData/Update_data';
import unnamed from '../components/unnamed.png'


//function body
export default function User() {
  const [user, 
    // loading, err
  ] = useAuthState(firebase.auth());
  const [img, setImg] = useState(unnamed)

  useEffect(() => {
    if (user.photoURL) {
      setImg(user.photoURL)
    }
  }, [])
  const [open, setOpen] = useState(false);
  // const [img ,setImg]=useState('')
  // const [name, setName]=useState('')
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    speciality: '',
    ag_no: '',
    id: ''
  })
  // console.log(uid)
  const messageRef = firebase.firestore().collection("console");
  const [value] = useCollectionData(messageRef);
  const photo_url = firebase.auth().currentUser.photoURL;
  // console.log("photo URL",photo_url)


  return (<>
  <div className="user">
  <h2>My Account :)</h2>
  
    {value && value.map((val, index) => {
      // console.log("val email",val)
      // var nomi=firebase.auth().currentUser;
      // console.log("current user userr",nomi.photoURL)
      if (user.uid === val.id) {
        // console.log("both are eqaul")
        // console.log("", val);

        return <Card>
          <div className="container-fluid" >
            <div className="row">
              <div className="col-lg-6">
              <ProfileUi
            imgUrl={img}
            name={val.name}
            designation={val.speciality}
          />
              </div>
              {/* <div className="col-lg-3">

              </div> */}
              <div className="col-lg-6">

              <Card>
          <p><span style={{fontWeight:"bold"}}>NAME</span>: {val.name}</p>
          <p><span style={{fontWeight:"bold"}}>EMAIL</span>: {val.email}</p>
          <p><span style={{fontWeight:"bold"}}>SPECIALITY</span>:{val.speciality}</p>
          <p><span style={{fontWeight:"bold"}}>CELL</span>:{val.phone}</p>
          <p><span style={{fontWeight:"bold"}}>Ag No</span>:{val.ag_no}</p>
          <button onClick={onOpenModal}>Update Profile</button>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>Update </h2>

            <Updater value={val} open={setOpen}/>

          </Modal>
          </Card>
              </div>
            </div>
          </div>
          
        </Card>

      }
    })}

</div>
  </>)





}