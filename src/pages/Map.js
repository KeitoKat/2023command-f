import React, { useState } from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './MapElement'
import genderNeutral from './gender-neutral.svg'
import elevators from "./elevators.svg"
import microwave from "./microwaves.svg"
import './Map.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const Map = () => {
    return (
        <div class="Map">
          <h1>Resources Map</h1>
          <p>Choose your priority</p>
          <Link to="/gender-neutral">
            <img style={{ width: 220, height: 252}} src= {genderNeutral}/>
          </Link>
          <Link to="/elevators">
            <img style={{ width: 220, height: 252}} src= {elevators}/>
          </Link>
          <Link to="/water-fountains">
            <img style={{ width: 220, height: 252}} src= {microwave}/>
          </Link> 

           {/* <img style={{ width: 230, height: 262}} src= {genderNeutral} alt="React Logo"/>
          <img style={{ width: 240, height: 268}} src= {elevators} alt="React Logo" />
          <img style={{ width: 230, height: 262}} src= {microwave} alt="React Logo" /> */}
              <iframe src="https://www.google.com/maps/d/embed?mid=1Nviv1JmRdpTNjj7BuXg06dc2uW0&ehbc=2E312F" width="640" height="480"></iframe>

        </div>
      );
};

export default Map;
