import React, { useState } from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './MapElement'
import genderNeutral from './gender-neutral.png'
import elevators from "./elevators.png"
import microwave from "./microwave.png"
import './Map.css'
import {Link} from 'react-router-dom';

const Map = () => {
    return (
        <div class="Map">
          <h1>Resources Map</h1>
          <p>Choose your priority</p>
          <Link to="./gender-neutral">
            <img style={{ width: 230, height: 262}} src= {genderNeutral} alt="React Logo"/>
          </Link>
          <Link to="/elevators">
            <img style={{ width: 230, height: 262}} src= {elevators} alt="React Logo"/>
          </Link>
          <Link to="/water-fountains">
            <img style={{ width: 230, height: 262}} src= {microwave} alt="React Logo"/>
          </Link>

          {/* <img style={{ width: 230, height: 262}} src= {genderNeutral} alt="React Logo"/>
          <img style={{ width: 240, height: 268}} src= {elevators} alt="React Logo" />
          <img style={{ width: 230, height: 262}} src= {microwave} alt="React Logo" /> */}
            {/* <Menu>    
              <Link to="/gender-neutral">
                <img style={{ width: 102, height: 54, marginRight: '4rem'}} src= {genderNeutral} alt="React Logo" />
              </Link>
            <MenuLink to="/elevators" activeStyle>
              Home
            </MenuLink>
            <MenuLink to="/water-fountain" activeStyle>
              About Us
            </MenuLink>
          
            </Menu> */}
        

        </div>
      );
};

export default Map;
