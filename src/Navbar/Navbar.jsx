import  firebase from 'firebase/app';
// import CurrentUser from './Current_User';
import {BiLogOutCircle} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import Navbar_custom from './Navbar_custom';
// import ""

export default function Navbar() {
    const logout = () => {
        const agree=window.confirm("Click okay to logout")
        if(agree){
        firebase.auth().signOut();
        console.log("Loged out")
        }else{
            console.log("tussi ja ra oo???😟")
        }
    }
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-inverse fixed-top navbar-custom">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">BSCS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={logout}><BiLogOutCircle/>Log out</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/user">user</Link></li>
                                <li><Link className="dropdown-item" to="/about">About Chat App</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/navbar_custom">Contact</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/chatbox" tabindex="-1" >chat room</Link>
                        </li>
                    </ul>
                    
                            
                        
                </div>
            </div>
        </nav>


        {/* <div  >
        
        </div> */}

        

    </>)
}