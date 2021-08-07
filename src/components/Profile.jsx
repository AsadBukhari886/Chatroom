import Navbar from "../Navbar/Navbar";
import CurrentUser from "./Current_User";
import { Switch ,Route, Redirect} from "react-router-dom";
import Home from './Home.jsx';
// import Chatbox from './Chatbox.jsx'
import User from "./User";
import About from './About.jsx'
import Enter_Card from "./Entercard";
import Contact from './Contact'
import Navbar_custom from "../Navbar/Navbar_custom";
import Log_out from "./Logout";

export default function Profile(){
return (<>
{/* <Navbar/> */}
<Navbar_custom/>
<Switch>
<Route exact path="/home" component={Home}/>
<Route exact path="/chatbox">
    <CurrentUser/>
</Route>
<Route exact path="/user">
    <User/>
</Route>
<Route exact path="/about">
    <About/>
</Route>
<Route exact path="/contact">
    <Contact/>
</Route>
<Route exact path="/navbar_custom">
    <Navbar_custom/>
</Route>
<Route exact path="/log_out">
    <Log_out/>
</Route>

<Redirect to="/Home"/>
</Switch>
{/* <CurrentUser/> */}
</>)
}