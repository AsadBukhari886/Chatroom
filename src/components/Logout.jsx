import React from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
// import M from 'materialize-css';;



export default function Log_out(e) {
    // e.preventDefault()

    // const [user, 
    //     // loading, err
    // ] = useAuthState(firebase.auth())
    
        // const agree=window.confirm("Do you want to logout???")
        // if(agree){
        // firebase.auth().signOut();
        // console.log("Loged out")
        // }else{
        //     console.log("nothing is gonna happen")
        // }
    

//     if (err) {
//         return <div>
//             <h2>{M.toast({ html: `${err}` })}</h2>
            
//         </div>
// }
//     if (loading) {
//         return <div>
//             <h2>{M.toast({ html: `${loading}` })}</h2>
//         </div>
// }
    return (<></>)
    //     <div>
    //         {/* <div className="row"> */}
    //             {/* <div className='col'> */}
    //             <p>Current User: {user.email}</p>
    //         {/* </div> */}
    //         {/* <div className="col"> */}
    //         <button onClick={logout}>Log out</button>
    //         {/* </div> */}
    //         {/* </div> */}
           
    //      </div>
    // );
};
