import React from "react";
import pic from "./lionesshug.jpg"
import "./Technologies.css"
import {FaLowVision,FaPython,FaCloudversify } from 'react-icons/fa';


function Technologies(){
    return(
    <div className="Techie">
    <h1 
    style={{fontSize:"40px",color:"#44250A",textAlign:"left",marginLeft:"5%",fontFamily:"sans-serif",borderBottom: "4px solid #E8733A",borderBottomStyle:""}}>
      <u style={{color:"#E8733A"}}>What is Entare?</u>
      </h1>

  <div className="Join" 
  style={{backgroundColor:"#44250A",height:"545px",width:"100.1%",display:"inline-flex"}}>

    <div className="text">
    <p  
    style={{fontSize:"29px",color:"white",fontFamily:"Bellefair",marginTop:"14%",width:"190%",height:"15%",marginLeft:"-28%"}}
    >You will present a pitch (4 minutes recording)<br/>
    OR 4 minutes elevator pitch to the jury about <br/>your solution explaining its potential to solve<br/>the hackathon challenges around lion<br/>identification or human/predator conflict<br/>mitigation </p>
    
    </div>
    
    <div className="image">
    <img src={pic} alt="flower" style={{float:"right",height:"100%",marginTop:"1px",marginLeft:"170px"}} />
      
    </div>

  
    

  </div>
   <h2 style={{fontSize:"40px",color:"#44250A",textAlign:"centre",fontFamily:"sans-serif",marginLeft:"0%"}}>Technologies Used </h2>
   <div className="All" style={{display:"inline-flex"}}>


     <div className="Computervision" style={{borderRight:"2px solid #E8733A",margin:"0% 5% 0% -12%",width:"67%"}}>
      <FaLowVision style={{color:"white",border:"solid 1px ",backgroundColor:"#E8733A",borderRadius:"50px",fontSize:"89px"}}/>
      <h1 style={{fontFamily:"Cabin Condensed",color:"#44250A",textAlign:"center"}}>Computer Vision</h1>
      <p style={{color:"#44250A"}}>The ability to identify whisker patterns in images 
      <br/>in images of lions hence knowing individual lions.</p>
     </div>


        <div className="Py" style={{borderRight:"2px solid #E8733A",marginLeft:"-5.4%",width:"67%"}}>
        <FaPython style={{color:"white",border:"solid 1px ",backgroundColor:"#E8733A",borderRadius:"50px",fontSize:"89px"}}/>
        <h1 style={{fontFamily:"Cabin Condensed",color:"#44250A",textAlign:"center"}}>Python</h1>
        <p style={{color:"#44250A"}}>Highly preferred language for Machine learning
        <br/>and cv as it is very readable and concise esp to.
        </p>
      </div>


      <div className="Deep learning" style={{marginLeft:"0%",marginRight:"-7%",width:"57%"}} >
      <FaCloudversify style={{color:"white",border:"solid 1px ",backgroundColor:"#E8733A",borderRadius:"50px",fontSize:"89px"}}/>
      <h1 style={{fontFamily:"Cabin Condensed",color:"#44250A",textAlign:"center"}}>Deep learning </h1>
      <p style={{color:"#442505"}}>Training  the system  with many images
      <br/>Training  the system  with many images</p>
      </div>
      
    </div>
    </div>
    );
}
export default Technologies ;