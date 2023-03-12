import React from "react";
import homeTop from "./home-top.svg";
import './Home.css'

const About = () => {
return (
	<div>
        <div>
            <img src={homeTop}/>
	    </div>
        <div>

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
