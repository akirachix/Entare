import React from "react";
import liona from "./images/liona.jpg";
import lion2 from "./images/lion2.jpg";
import lionc from "./images/lionc.jpg";
import '../components/Solution.css'
import {FaVideo,FaCamera,FaMehBlank,FaFolder,FaNeuter, IconName  } from 'react-icons/fa';
const Solution = ()=>{
    return(
        <div>
    <div className="container">
<div className="images">
    {/* <FaPlus className="plus"/> */}
<img className="image-one" src={liona}/>
<img className="image-two" src={lion2}/>
<img className="image-three" src={lionc}/>

<h1 className="live">Live Stream</h1>
<h1 className="identification">Identification Using <br/> Whiskers</h1>
<h1 className="matched">Matched Lion</h1>
</div>
    </div>
      
    <div className="container-two">
    <h1 className="process">Identification Process</h1>
    <hr/> 
    <p className="stream">Live Streaming</p>
   <FaVideo className="video" size={92}/>   
<p className="word-one" >User will have to start a live stream<br/>on his canon camera in the field</p>

<p className="match">Un Matched Lion</p>
<p className="word-two" >User will have to start a live stream<br/>on his canon camera in the field</p>
<FaCamera className="camera" size={92}/>  
<div className="icon-three">
<FaMehBlank className="face" size={92}/>  
<p className="lion">Matching Lion</p>
<p className="word-three" >User will have to start a live stream<br/>on his canon camera in the field</p>
</div>
<p className="store">Store in a database</p>
<p className="word-four" >User will have to start a live stream<br/>on his canon camera in the field</p>
<FaFolder className="folder" size={92}/>
<div className="icon-five">
<p className="database">Database Comparison</p>
<FaNeuter className="neuter" size={92}/>
</div>


    </div>
        </div>
    )
}
export default Solution;