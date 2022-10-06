import React from "react";
import liona from "./images/liona.jpg";
import lion2 from "./images/lion2.jpg";
import lionc from "./images/lionc.jpg";
import '../components/Solution.css'
import {FaVideo,FaCamera,FaMehBlank,FaFolder,FaNeuter, FaTv,IconName  } from 'react-icons/fa';
const Solution = ()=>{
    return(
        <div>
        <h1 className="system ">How the System Works</h1>
        <hr className="hr-one"/>
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

    <div className="icon-one" >
        
    <h1>Live Streaming</h1>
    <p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
    <FaVideo className="video" size={62}/>   
   
    </div>
    <h1 className="one">1</h1>
  <div className="icon-two">

  <h1>Unmatched Lion</h1>
  <p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
    <FaCamera className="camera" size={62}/>  
  </div>
  <h1 className="four">4</h1>

<div className="icon-three">
<h1>Matching Lion</h1>
<p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
<FaMehBlank className="face" size={62}/>   
</div>
<h1 className="two">2</h1>

<div className="icon-four">
<h1>Store in a Database</h1>
<p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
<FaFolder className="folder" size={62}/>
</div>
<h1 className="five">5</h1>

<div className="icon-five">
<h1>Database Comparison</h1>
<p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
    <FaNeuter className="neuter" size={82}/>
</div>
<h1 className="three">3</h1>

<div className="icon-six">
<h1>Review Collected Data</h1> 
<p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
    <FaTv className="tv" size={62}/>
</div>
<h1 className="six">6</h1>





<div>

</div>


    </div>
        </div>
    )
}
export default Solution;