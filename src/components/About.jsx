import M from 'materialize-css';


export default function About(){
    const ab=()=>{
        M.toast({html: `💘💘`, classes: 'red'})
    }
    return(<>
    <div className="container">
<div className="row">
<div className="col-lg-1">

</div>
<div className="col-lg-10">
<h2>About</h2>
<p>this is simple chat app.Designed for Laptop users only </p>
<p>Created and designed by  
     <span style={{color:"blue",cursor:"pointer"}} onClick={ab}>  AB</span>
    </p>
{/* <p><a href="https://reactjs.org/docs/getting-started.html">Reactjs</a> is used as frontend and <a href="https://firebase.google.com/docs?gclid=CjwKCAjwr56IBhAvEiwA1fuqGtzK_JKjTgNg1bpKux_3aPMSg5dTFxN7nCVhHNsmetHGpI_pYX2ZcxoCJzoQAvD_BwE&gclsrc=aw.ds">
    firebase</a> to secure this App</p>
    <p>Source code is available <a href="https://github.com/AsadBukhari886?tab=repositories">here</a></p> */}
<p>Don't access your private Data</p>
<p>Source code is available <a href="https://github.com/AsadBukhari886?tab=repositories">here</a></p> 

</div>
<div className="col-lg-1">

</div>
</div>
</div>


    <div className="footer">
            © 2021 AsadBukhari. All rights reserved.
        </div >
</>)
}