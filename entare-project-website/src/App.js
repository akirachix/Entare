import React from 'react';
import Solution from './components/Solution'
import './App.css';
import LandingPage from './LandingPage';
import Technologies from './Technologies'
import Footer from './footer'
function App() {
  return (
    <div >
     <LandingPage/>
     <Technologies/>
     <Solution/>
     <Footer/>
     
    </div>
  );
}

export default App;
