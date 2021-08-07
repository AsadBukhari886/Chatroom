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

<p>Don't access your private Data</p>
<p>Source code is available <a href="https://github.com/AsadBukhari886/Chatroom.git">here</a></p> 

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