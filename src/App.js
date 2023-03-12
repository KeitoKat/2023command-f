import React from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot"; // import the Chatbot component
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Maps from "./pages/Map";
import Feedback from "./pages/Feedback";
import GenderNeutral from "./pages/gender-neutral";
import Elevators from "./pages/elevators";
import WaterFountains from "./pages/water-fountains";
import './pages/Map.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<AboutUs/>} />
          <Route path='/Map' element={<Maps/>} />
          <Route path='/Feedback' element={<Feedback/>} />
          <Route path='/gender-neutral' element={<GenderNeutral/>} />
          <Route path='/gender-neutral' element={<GenderNeutral/>} />
          <Route path='/elevators' element={<Elevators/>} />
          <Route path='/water-fountains' element={<WaterFountains/>} />
        </Routes>
      </Router>
      <Chatbot/> {/* add the Chatbot component */}
      <Footer/>
    </div>
  );
}

export default App;
