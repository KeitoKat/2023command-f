import React from "react";
// import aboutus from './about_us.png';
// import aboutus2 from './About-us2.png';
import aboutsvg from "./AboutUs-svg.svg";
import aboutsvg2 from "./Body.svg";
import aboutsvg3 from "./OurMission.svg";
import './About.css';
  
const Home = () => {
  return (
    <div>
        <div class="top-container">
            <img src={aboutsvg}/>
            {/* <h1>About Pinion</h1>
            <h6>Stay locally vocal</h6>
            <div style={{margin: '100px' }}>
                <img src={aboutus} alt="react logoo" width="300" height="300"/>
            </div> */}
        </div>
        <div class="middle-container">
            <img src={aboutsvg2}/>
            {/* <div class="middle-title">
                <h1>Accessibility, Inclusivity, and Sustainability </h1>
                <p>Everyone deserves to be welcomed, happy and safe. To make our mission possible, we aim to inform students and visitors of all race and genders with every accommodations that UBC provide in the community. </p>
            </div> */}
            {/* <div>
                <img src={aboutus2} alt="react logoo" width="300" height="300"/>
            </div> */}
            
        </div>
        <div class="bottom-container">
            <img src={aboutsvg3}/>
        </div>
    </div>
  );
};
  
export default Home;
