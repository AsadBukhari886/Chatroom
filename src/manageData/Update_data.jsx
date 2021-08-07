import React, { useState } from 'react';
import firebase from 'firebase/app'
import Upload_File from './Upload_File'

export default function Updater(props) {
        const [Name, setName] = useState(props.value.name)
        const [email, setEmail] = useState(props.value.email)
        const [speciality, setSpeciality] = useState(props.value.speciality)
        const [phone, setPhone] = useState(props.value.phone)
        const [agNo, setAgNo] = useState(props.value.ag_no)

        const changer = (e) => {
            const name = e.target.name;
            const val = e.target.value
            if (name === "name") {
                setName(val)
            }
            if (name === "email") {
                setEmail(val)
            }
            if (name === "special") {
                setSpeciality(val)
            }
            if (name === "phone") {
                setPhone(val)
            }
            if (name === "ag_no") {
                setAgNo(val)
            }
            console.log(val)
        }
        const uid = firebase.auth().currentUser.uid;
        const clicker = () => {
            firebase.firestore().collection("console").doc(uid).update({
                name: Name,
                email: email,
                speciality: speciality,
                phone: phone,
                ag_no:agNo
            })
props.open(false)
        }
        try {
        return (<>

            <input type="file" onChange={(e) => Upload_File(e)} />
            <label>display picture</label><br /><br />
            <input type="text" name="name" value={Name} maxlength = "15" onChange={(e) => changer(e)} autocomplete="off"/>
            <label>Name</label>
            <input type="email" name="email" value={email} onChange={(e) => changer(e)} />
            <label>Email</label>
            <input type="text" name="special" value={speciality} maxlength = "80" onChange={(e) => changer(e)} autoComplete="off"/>
            <label>Speciality</label>
            <input type="text" name="phone" value={phone} onChange={(e) => changer(e)} />
            <label>phone Number</label><br />
            <input type="text" name="ag_no" value={agNo} onChange={(e)=>changer(e)}/>
            <label>Ag No:</label><br />

            <button onClick={clicker}>update</button>
        </>)
    } catch (err) {
        console.log(err)
    }
}