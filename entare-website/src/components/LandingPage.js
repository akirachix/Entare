import React from "react";
import './LandingPage.css'
import pic2 from './images/logo.png'
// import Nav from './Nav';
import { Link } from "react-router-dom";
import TechnologiesUsed from './TechnologiesUsed'

//  import pic from './images/lion.jpg'
    
 
 
const LandingPage = ()=>{
  
    return(
       

      
        <div className="container-one">



           <div className="top">
                {/* <img src={pic} className="leo"></img> */}
            
                <nav>
                <ul >    
                  
                {/* <li><Link to="/footer">Contact Us</Link></li> */}
                   <li><Link to="/footer"><a href="#"></a> Contact Us</Link></li>
                   <li><Link to="/footer"><a href="#"></a> The Team</Link></li>
                   <li><Link to="/tech"><a href="#"></a> About Entare</Link></li>
                   <li><Link to="/"><a href="#"></a> Home</Link></li>
                   {/* <li><a href="#"></a> </li>
                   <li><a href="#"></a> About Entare</li>
                   <li><a href="#"></a> Home</li> */}
                </ul>
            </nav>

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