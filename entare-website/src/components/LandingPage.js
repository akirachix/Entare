import React from "react";
import './LandingPage.css'
import pic2 from './images/logo.png'
// import Nav from './Nav';
import { Link } from 'react-scroll';
import TechnologiesUsed from './TechnologiesUsed'

//  import pic from './images/lion.jpg'
    
 
 
const LandingPage = ()=>{
  
    return(
       
        <div className="container-one">
           <div className="top">
               
            
                <nav>
                <ul >    
                  {/* <li><NavLink to={{
                    pathname: "/profile/percybolmer",
                    state: { registrationdate: "2021-07-07" },
                }}>Profile</NavLink></li>   
                */}
                   <li><Link activeClass ="active" to="socials" spy={true} smooth={true} duration={500} >Contact Us</Link></li>
                   <li><Link activeClass ="active" to="Team" spy={true} smooth={true} duration={500}> The Team</Link></li>
                   <li><Link activeClass ="active" to="container-words" spy={true} smooth={true} duration={500}>About Entare</Link></li>
                   <li><Link activeClass ="active" to="container-one" spy={true} smooth={true} duration={500}>Home</Link></li>
                 
                </ul>   
            </nav>
            {/* activeClass="active" 
to="sectionId" 
spy={true} 
smooth={true} 
duration={500} */}

 <img src={pic2} className="logo"></img> 

<h1>SAVE THE LIONS</h1>
<p className="horiz"></p>

<div className="lion">
            <h1>LION</h1>
            <p>Identification in Maasai Mara</p>
            </div>
            </div>
            <div className="text-container">

            <p>"The Maasai Mara is one of Africa's most robust ecosystems,yet <br/>also fragile.The cats that live here,especially the lions,seem invisible <br/>,but they are not. We know these lions better than some of our friends <br/>, but we cannot afford to take their survival for granted. It's time to learn<br/>more about the challenges they face. "</p>
            </div>
            

<TechnologiesUsed />

        </div>
      
    )
}

export default LandingPage;