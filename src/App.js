import React from 'react';
import axios from 'axios';
import './App.css';
import Profile from "./components/Profile.js"
import Footer from './components/Footer.js';
import Navbar from "./components/Navbar"
// import myLogo from "./components/Pinion_logo.png"
import { ReactComponent as Logo } from './components/Pinion_logo.png'

import {useState, useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutUs from "./pages/About"
import Maps from "./pages/Map"
import Feedback from "./pages/Feedback"

const COHERE_API_KEY = process.env.REACT_APP_COHERE_API_KEY;


function App() {
  console.log("cohere api key", COHERE_API_KEY);
  const [counter, setCounter] = useState(0);
  const [party, setParty] = useState(false);
  const [question, setQuestion] = useState('');
  const [response , setResponse] = useState('');

  const cohere = async (query) => {
    const requestBody = {
      "model": "command-xlarge-nightly",
      "stream": false,
      "query": query
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Cohere-Version': '2022-12-06',
        'accept': 'application/json',
        'content-type': 'application/json',
        'authorization': `Bearer ${COHERE_API_KEY}`
      },
      data: JSON.stringify(requestBody),
      url: 'https://api.cohere.ai/chat'
    };

    axios(requestOptions)
      .then(response => {
        console.log(response.data)
        setResponse(response.data.reply);
      })
      .catch(error => {
        console.log(error);
      });

  }

  return (
    <div style = {{backgroundColor: party? "blue" : "white"}} className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<AboutUs/>} />
          <Route path='/Map' element={<Maps/>} />
          <Route path='/Feedback' element={<Feedback/>} />
        </Routes>
      </Router>
      {response}
      <input type="text" value={question} onChange={(event) => setQuestion(event.target.value)} />
      <button onClick={() => {cohere(question)}}></button>
      {/* <h1>
        {counter}
      </h1>
      <button onClick={()=> { 
        setCounter(counter + 1) }}>
          Click me!
      </button>
      <button onClick={()=> {
        setParty(!party)}}>Party
      </button>
      <p>Command-f team</p> */}
     
      {/* <iframe src="https://www.google.com/maps/d/embed?mid=1Nviv1JmRdpTNjj7BuXg06dc2uW0&ehbc=2E312F" width="640" height="480"></iframe> */}
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcxkIMz2eSNHWU8CL6s3mhBxRJWdidPQghfH5pX-iMr2nZcw/viewform?embedded=true" width="640" height="955" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      {/* <div>Hello!</div> */}
      {/* <Profile 
        description="Lead dev" 
        name="Khammy" 
        image="https://media.licdn.com/dms/image/D5635AQG_J8tEmaBQDg/profile-framedphoto-shrink_800_800/0/1674421219371?e=1679025600&v=beta&t=NMShGtzQRmIgCl3z2StmuEFu76dbI_6jK6Ut9LVdt4U"/>
      {party && <Profile 
        description="Product Manager" 
        name="Yui" 
        image="https://media.licdn.com/dms/image/C5603AQHnxQwUnp4CQA/profile-displayphoto-shrink_800_800/0/1636567577044?e=1683763200&v=beta&t=m512-qnTs28GG5A0TuZSb6PiXjis8xS0UBSMrcT4JvI"/>
      }
      <Profile 
        description="Lead Designer" 
        name="Rachel" 
        image="https://media.licdn.com/dms/image/C5603AQHjeAczYe0brQ/profile-displayphoto-shrink_800_800/0/1646522352904?e=1683763200&v=beta&t=TmjucisBQfRTNalZHgUvrDnnUHEfw1LLVexXvO-WJY4"/>
      <Profile 
        description="Software dev" 
        name="Andrea" 
        image="https://bloximages.chicago2.vip.townnews.com/vtcng.com/content/tncms/assets/v3/editorial/5/e8/5e8a9a36-4dc1-11ea-83e8-1787e2a1ead4/5e443cedd0598.image.jpg?resize=394%2C500"/> */}

      <Footer/>
    </div>
  );
}

export default App;
