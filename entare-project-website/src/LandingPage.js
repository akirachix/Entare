import React from "react";
import "./LandingPage.css"
import pic from "./logo.png"
// import video from "./leo.mp4"
import picture from "./lion.jpg"

const LandingPage=()=>{
    return (
        <body> 
             {/* <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" className="video"></source>
              </video>    */}
        
        <div className="image">
        
          
            <nav>
                <ul>
                   <li><a href="#"></a> Contact Us</li>
                   <li><a href="#"></a> The Team</li>
                   <li><a href="#"></a> About Entare</li>
                   <li><a href="#"></a> Home</li>
                    
                    
                    
                </ul>
            </nav>
               <img src={pic} className="leo"></img>
            {/* <p className="entare">Entare Pride</p> */}
            <p className="line"> </p>
            <p className="save">SAVE THE LIONS</p>


            <div className="lion">
            <h1>LION</h1>
            <p>Identification in Maasai Mara</p>
            <button>About Entare</button>
            </div>
            
        <p className="play">Lions play a crucial role in balancing the ecosystem and <br/> they should be protected at all cost.</p>
           
        
          
           




        

        
        </div>
       
        </body>
        
      
    )
}

export default LandingPage;