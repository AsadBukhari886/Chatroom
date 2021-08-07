import firebase from 'firebase/app';


export default function CreateUserCollection(user) {
    console.log("colection user  ", user)
    console.log("collection uid", user.uid)
    console.log("collection name", user.displayName)
    firebase.firestore().collection("console")
        .doc(user.uid).set({
            name: user.displayName,
            id: user.uid,
            portfolioURL: "",
            email: user.email,
            phone: '',
            speciality: "",
            ag_no: "",
            photoURL:''

        })
}







// export default function createUserCollection(user){
//     console.log("this is  collections's page",user)
//     firebase.firestore().collection("console")
//     .doc(user.uid).set({
//         name:user.displayName,
//         id:user.uid,
//         portfolioURL:"",
//         email:user.email,
//         phone:"",
//         speciality:"",
//         // experience:""


//     })
//     }