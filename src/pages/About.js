import React from "react";
import aboutus from './aboutus.png';
import './About.css';
  
const Home = () => {
  return (
    <div class="top-container">
      <h1>About Pinion</h1>
      <h6>Stay locally vocal</h6>
      <div style={{margin: '100px' }}>
        <img src={aboutus} alt="react logoo" width="300" height="00" />
    </div>
    </div>
  );
};
  
export default Home;
