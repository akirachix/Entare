import React from "react";
import './TechnologiesUsed.css';
import cat from  './images/lionesshug.jpg';
import {FaLowVision,FaPython,FaCloudversify } from 'react-icons/fa';
import pic from './images/lion1.png';
import pic2 from './images/lion2.png';
import pic3 from './images/lion3.png';
import {FaVideo,FaCamera,FaMehBlank,FaFolder,FaNeuter, FaTv,FaPlus,FaArrowRight } from 'react-icons/fa';
import Footer from "./Footer";
const TechnologiesUsed = ()=>{
    return(
        <div> 
<div className="container-tech">
<p>What is Entare ?</p>

</div>
<p className="line-2"></p>
<div className="container-words">
    <p>Entare is a system that aims  <br/>to improve the efficiency  <br/>of the lion identification process in  <br/>the Mara Reserve inorder to <br/>protect and balance the ecosytem.The system <br/>is trained to identify individual lions <br/>based on their whisker spot patterns,classify  <br/>and cluster the data collected. </p>
    <img src={cat} className="leo"></img>
</div>

<div className="tech-used">
<h1>Technologies Used</h1>

</div>
<div class = "techs">
<div className="computer-vision">
<FaLowVision className="one"/>
<div className="cv">
<h1>Computer Vision</h1>
<p>To extract unique features of a lion</p>
</div>
</div>


<div className="line-1"></div>

<div class="tech">
<div className="python">
<FaPython className="two"/>
<h1>Python</h1>
<p>It is one of the programming <br/>languages used to train our model.</p>
</div>

<div className="line-3"></div>

<div className="cloud">
<FaCloudversify className="three"/>
<div className="deep">
<h1>Deep Learning</h1>
<p>It is one of the programming <br/>languages used to train our model.</p>
</div>
</div>
</div>
</div>

    <h3>How the System Works</h3>
    <p className="line-4"></p>
    <div className="name">
    <img src={pic} className="image-one"/>
    <FaPlus className="plus" size={45}/>
    <img src={pic2} className="image-two"/>
    <FaArrowRight className="arrow" size={45}/>
    <img src={pic3} className="image-three"/>
    <p className="one">Live Stream</p>
    <p className="two">Identification Using Whiskers</p>
    <p className="three">Matched Lion</p>

    </div>
<h1 className="process">Identification Process</h1>
<p className="line-5"></p>

<div className="icon-one" >
    <h1>Live Streaming</h1>
    <p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
    <FaVideo className="video" size={62}/>
    </div> 

    <div className="icon-two">
  <h1>Unmatched Lion</h1>
  <p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
    <FaCamera className="camera" size={62}/>
  </div>

  <div className="icon-three">
<h1>Matching Lion</h1>
<p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
<FaMehBlank className="face" size={62}/>
</div>

<div className="icon-four">
<h1>Store in a Database</h1>
<p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
<FaFolder className="folder" size={62}/>
</div>

<div className="icon-five">
<h1>Database Comparison</h1>
<p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
    <FaNeuter className="neuter" size={82}/>
</div>

<div className="icon-six">
<h1>Review Collected Data</h1>
<p>User will have to start a live stream.
    <br/>The camera will just be a canon camera</p>
    <FaTv className="tv" size={62}/>
</div>

  <Footer/> 

    </div>
  

   

   
                                                
    )
}
export default TechnologiesUsed;
