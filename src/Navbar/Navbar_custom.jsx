import Navbar from "reactjs-navbar";
import firebase from 'firebase/app'
// import { FaBars } from 'react-icons/fa';
import {BiLogOutCircle} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg'

import CS_Logo from './CS_Logo.jpeg'
import {
  Nav,
  Bars,
  NavMenu,
  NavLinks,
  NavButton,
  NavBtnLink,
  NavLinkImg,
  NavBtnLinkbtn
} from './NavbarElements.jsx'


export default function Navbar_custom(){
  
  const logout = (e) => {
    e.preventDefault();
    const agree=window.confirm("Click okay to logout")
    if(agree){
    firebase.auth().signOut();
    console.log("Loged out")
    }else{
        console.log("tussi ja ra oo???😟")
    }
}

    return (<>
    <div className="navi">
    <Nav>
    <NavLinks to="/home">
      <NavLinkImg src={CS_Logo}/>
    </NavLinks>
      <Bars/>
      <NavMenu>
        <NavLinks to="/home" activeStyle>
          Home
        </NavLinks>
        <NavLinks to="/user" activeStyle>
        Profile
        </NavLinks>
        <NavLinks to="/chatbox" activeStyle>
          ChatBox
        </NavLinks>
        <NavLinks to="/about" activeStyle>
          About
        </NavLinks>
        <NavBtnLink >
        <NavBtnLinkbtn onClick={(e)=>logout(e)}><BiLogOutCircle/>Logout</NavBtnLinkbtn>
        </NavBtnLink>

      </NavMenu>
      {/* <NavButton>
<NavBtnLink to="/logout">Logout</NavBtnLink>
      </NavButton> */}
    </Nav>

    </div>
    </>)
}