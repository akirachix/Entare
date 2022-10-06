import React from 'react';
import './App.css';
import leo2 from './images/leo2.jpg';
import logo from './images/logo2.jpg';
import photo2 from './images/photo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer= ()=>{
    return (
    <div>
        <div className="picture">
        <div className= "paragraph">
          <p>“Lions roam over such vast areas that no one<br/>
           research group can effectively study them across<br/>
           their entire range. Platforms like Entare enable<br/>
           us to work together and identify lions from photos<br/>
           more easily, thereby increasing the chances of<br/> 
           picking up potential movement between populations.”<br/>
           – Stephanie Dolrenry </p>
           </div>
    </div>
    <div className="process">
         <div className="details1">
         <div className="words">
         <p><FontAwesomeIcon icon ={faCamera} id ="p"></FontAwesomeIcon>Live stream</p>
         </div>
        </div>
        <div className="details2">
           <div className="words">
           <p><FontAwesomeIcon icon ={faLightbulb} id ="p"></FontAwesomeIcon>Identify</p>
           </div>
        </div>
        <div class="details3">
           <div className="words">
           <p><FontAwesomeIcon icon ={faArrowCircleUp} id ="pp"></FontAwesomeIcon>Save details</p>
           </div>
    </div>
    </div> 
    <div className="Team">
      
      <h1>Meet the Team</h1>
      <div className="line"></div>
      
      <div className="Teamtext">
          <img src={photo2} width="400px" height="450px"></img><br/>
          <p>Sovereign Nature Identifier is a unique identifier<br/>
             that can be connected to any piece of nature.<br/>
             Its main purpose is to bridge identified nature<br/>
             with the digital world.<br/> 
             Connected to the digital infrastructure objects<br/>
             of nature can get new properties, functions,<br/>
             and representations, all thanks to one simple<br/> 
             identifier.</p>
      </div>
     </div>

     <div className="footer">
    <div className="left-logo">
    <div className="logo2">
    <img src={logo} style={{width:"100px" , height:"100px"}}></img>
    <p>ENTARE</p>
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
     <a href="https://www.linkedin.com/groups/9240225/"><FontAwesomeIcon icon ={faLinkedin}  className="text-white:#ffff" id ="i"></FontAwesomeIcon></a>
     <a href="https://bit.ly/2wG02Ul"><FontAwesomeIcon icon ={faFacebook} id ="i"></FontAwesomeIcon></a>
</div>
</div>

</div> 
    
        )
}
export default Footer;
