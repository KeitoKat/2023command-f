import React from 'react';
import './App.css';
import Profile from "./components/Profile.js"
import Footer from './components/Footer.js';

import {useState, useEffect} from "react"


function App() {
  const [counter, setCounter] = useState(0);
  const [party, setParty] = useState(false);

  useEffect(()=>{
    console.log("Hello World!!!!");
  })
  return (
    <div style = {{backgroundColor: party? "blue" : "white"}} className="App">
      <h1>
        {counter}
      </h1>
      <button onClick={()=> { 
        setCounter(counter + 1) }}>
          Click me!
      </button>
      <button onClick={()=> {
        setParty(!party)}}>Party
      </button>
      <p>Command-f team</p>
      <Footer/>
      <iframe src="https://www.google.com/maps/d/embed?mid=1Nviv1JmRdpTNjj7BuXg06dc2uW0&ehbc=2E312F" width="640" height="480"></iframe>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcxkIMz2eSNHWU8CL6s3mhBxRJWdidPQghfH5pX-iMr2nZcw/viewform?embedded=true" width="640" height="955" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      <div>Hello!</div>
      <Profile 
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
        image="https://bloximages.chicago2.vip.townnews.com/vtcng.com/content/tncms/assets/v3/editorial/5/e8/5e8a9a36-4dc1-11ea-83e8-1787e2a1ead4/5e443cedd0598.image.jpg?resize=394%2C500"/>
      
    </div>
  );
}

export default App;
