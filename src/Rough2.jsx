
// const [open, setOpen] = useState(false);
// const [img ,setImg]=useState('')
// const [name, setName]=useState('')

// const onOpenModal = () => setOpen(true);
// const onCloseModal = () => setOpen(false);



// const fireU = firebase.auth().currentUser;
// const uid = fireU.uid;
// const docs=firebase.firestore().collection("console").doc(uid)


// if (uid) {
//     const store = firebase.firestore().collection("console").doc(uid);
//     store.onSnapshot((doc) => {
//       const data = doc.data()

//       setInfo({
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         speciality: data.speciality,
//         ag_no: data.ag_no,
//         id: data.id
//       })
//     })
//     return (<>
//       <div>
    

//       </div>
//       <div className="container-fluid">
//         <div className='row'>
//           <div className="col-lg-6">
//             <ProfileUi
//               imgUrl={photo_url}
//               name={info.name}
//               designation={info.speciality}
//             />
//           </div>
//           <div className="col-lg-6">
//             <Card>
//               <div style={{ float: "left" }}>
//                 <p>speciality: {info.speciality}</p>
//                 <p>contact: {info.phone}</p>
//                 <p>Ag No:{info.ag_no}</p>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//       <button onClick={onOpenModal}>Update Profile</button>


//       <Modal open={open} onClose={onCloseModal} center>
//         <h2>update </h2>
// <input type="text" />
// <input type="file" onChange={(e)=>Upload_File(e)}/>       

//         <button >update</button>
//       </Modal>

//     </>)
//   }