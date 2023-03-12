import React from "react";
import homeTop from "./home-top.svg";
import './Home.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import genderNeutral from './gender-neutral.png'
import elevators from "./elevators.png"
import microwave from "./microwave.png"
import './Map.css'

const About = () => {
return (
	<div>
        <div>
            <img src={homeTop}/>
	    </div>
        <div class="Map">
          <h1>Accessibility Guidance</h1>
          <p class="noline">UBC offers accessible, inclusive, and sustainable accommodations in both Vancouver and Okanagan Campuses.</p>
          <Link to="/gender-neutral">
            <img style={{ width: 220, height: 252}} src= {genderNeutral}/>
          </Link>
          <Link to="/elevators">
            <img style={{ width: 220, height: 252}} src= {elevators}/>
          </Link>
          <Link to="/water-fountains">
            <img style={{ width: 220, height: 252}} src= {microwave}/>
          </Link> 

        </div>
        <div class="video-placeholder">
            <h1 class="title">How to use it?</h1>
            <div class="youTube" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lDbSsoyje3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </div>
    </div>
);
};

export default About;
