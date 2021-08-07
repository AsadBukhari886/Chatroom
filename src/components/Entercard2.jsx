import Card from 'react-card-component';
import { CardBody } from 'react-simple-card';
import Login from './Login.jsx'
import POPUP from './Sign_up';
// import Start_nav from './Start_nav';
import funny from '../manageData/funny.jpg'

 function Enter_Card2() {
    return (<>
        {/* <Start_nav/> */}
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col-lg-3 col-sm-0 "></div>
                <div className="col-lg-6 col-sm-12">
                    <CardBody >
                        <Card glass hoverType={"down"}>
                            <div>
                                Don't have account??? plzzz Signup<POPUP />
                            </div>
                            <div>
                                Already have  account??? login plzzz
                                <Login />

                            </div>
                        </Card>
                    </CardBody>
                </div>
                <div className="col-lg-3 col-sm-0"></div>
            </div>
        </div>
        <div className="footer">
            {/* Copr. reserved © created and designed by <a href={funny} target="_blank">AsadBukhari</a> */}
            {/* <br />ooops!!! <a href=" " target="_blank">here</a> i am */}
            This website  use cookies ,Click here to <a href={funny} style={{borderBottom:"1px solid"}}>learn more...</a>
        
        </div >

    </>)


}