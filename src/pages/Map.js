import React, { useState } from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './MapElement'
import genderNeutral from './gender-neutral.png'
import elevators from "./elevators.png"
import microwave from "./microwave.png"
import './Map.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const Map = () => {
    return (
        <div class="Map">
          <h1>Resources Map</h1>
          <p>Choose your priority</p>


          <Link to="/gender-neutral">
            <img style={{ width: 230, height: 262}} src= {genderNeutral}/>
          </Link>
          <Link to="/elevators">
            <img style={{ width: 230, height: 262}} src= {elevators}/>
          </Link>
          <Link to="/water-fountains">
            <img style={{ width: 230, height: 262}} src= {microwave}/>
          </Link> 

           {/* <img style={{ width: 230, height: 262}} src= {genderNeutral} alt="React Logo"/>
          <img style={{ width: 240, height: 268}} src= {elevators} alt="React Logo" />
          <img style={{ width: 230, height: 262}} src= {microwave} alt="React Logo" /> */}
        </div>
      );
};

export default Map;
