import React from "react";
import LandingPage from './components/LandingPage';
import TechnologiesUsed from "./components/TechnologiesUsed";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";



function App() {
  return (
    <div>
       <Router>
        <Routes>
        <Route exact path ='/' element={<LandingPage/>} />
      <Route exact path ='/tech' element={<TechnologiesUsed/>} />
      <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </Router>
      {/* <LandingPage/>  */}
       
      
    </div>
  );
}

export default App;
