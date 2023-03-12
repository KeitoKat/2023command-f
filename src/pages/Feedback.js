import React from "react";
import './Feedback.css';
import img2 from "./LandingPage.svg";
  
const Home = () => {
  return (
    <div>
        <div>
            <img src={img2}/>
        {/* <div class="top-container-feedback" style={{width: "100%", minHeight:"10em",backgroundRepeat:"no-repeat",backgroundSize:"cover",background: `url(${img})`}}> */}
            {/* <h1 class="title-feedback">Let us near you</h1>
            <p>Your opinion matters!</p> */}
        </div>
        <div class="form-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcxkIMz2eSNHWU8CL6s3mhBxRJWdidPQghfH5pX-iMr2nZcw/viewform?embedded=true" width="640" height="955" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
  );
};
  
export default Home;
