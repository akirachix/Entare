import React from "react";
import logo from './images/logo.png';
import photo2 from './images/photo2.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCamera} from '@fortawesome/free-solid-svg-icons';
// import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
// import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
// import {faFacebook} from '@fortawesome/free-brands-svg-icons';
// import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FaCamera,FaLightbulb,FaArrowAltCircleUp,FaLinkedin,FaEnvelope} from 'react-icons/fa';
import './Footer.css';

const Footer = ()=>{
    return(
     <div>
 <div className="picture">
        <div className= "paragraph">
          <p>“Lions roam over Fauch vast areas that no one<br/>
           research group can effectively study them across<br/>
           their entire range. Platforms like Entare enable<br/>
           us to work together and identify lions from photos<br/>
           more easily, thereby increasing the chances of<br/>
           picking up potential movement between populations.”<br/>
           – Stephanie Dolrenry </p>
           </div>
    </div>
    <div className="Det">
         <div className="details1">
         <div className="words">
       
        <FaCamera className="camera" size={31}/>
        <p className="live">live Stream</p>
         </div>
        </div>
        <div className="details2">
           <div className="words">
          
           <FaLightbulb className="lightBulb" size={31}/>
           <p className="p-light">Identify</p>
           </div>
        </div>
        <div class="details3">
           <div className="words">
          
           <FaArrowAltCircleUp className="arrow" size={31} />
           <p className="save">Save Details</p>
           </div>
    </div>
    </div>
  
    <div className="Team">
    <h1  className="pips">Meet the Team</h1>
      <div className="line"></div>
      <div className="Teamtext">
          <img src={photo2} width="400px" height="450px"></img><br/>
          <p>These are software developers who have great<br/>
             interest in creating impact in their communities and<br/>
             they enjoy engaging themselves in addressing real world<br/>
             issues and hence picking interest in solving for Lion <br/>
             identification in Masai Mara in order to balance the  <br/>
             system<br/></p>
             
      </div>
     </div>
     <div className="footer">
    <div className="left-logo">
    <div className="logo2">
    <img src={logo} style={{width:"100px" , height:"100px"}}></img>
   
    </div>
    <div className="foot-line"></div>
    <div className="identify">
    <p>LION IDENTIFICATION</p>
   </div>
    </div>
    <div className="rights">
    <p>All rights Reserved</p>
    <div class="footer-line"></div>
</div>
<div className="socials">
     
     <a href="https://www.linkedin.com/groups/9240225/"><FaLinkedin  className="text-white:#ffff" size={32} id="i"/></a>
     <a href="https://bit.ly/2wG02Ul"><FaEnvelope className="text-white:#ffff" size={32} id="i"/></a>
     
     
</div>
</div>
</div>
        )
};


export default Footer;
   
