import React, { useState } from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import myLogo from './Pinion_logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <>
      <PrimaryNav >
        <Hamburger />
        <Menu>    
          <Link to="./">
            <img style={{ width: 102, height: 54, marginRight: '4rem'}} src= {myLogo} alt="React Logo" />
          </Link>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/About" activeStyle>
            About Us
          </MenuLink>
          {/* <MenuLink to="/Map" activeStyle>
            Maps
          </MenuLink> */}
          <div className="dropdown">
            <MenuLink onClick={toggleDropdown} activeStyle>
              Maps
            </MenuLink>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/gender-neutral">Gender Neutral Washrooms</Link>
                </li>
                <li>
                  <Link to="/elevators">Elevator Map</Link>
                </li>
                <li>
                  <Link to="/water-fountains">Water Fountains and Microwaves</Link>
                </li>
              </ul>
            )}
          </div>
          <MenuLink to="/Feedback" activeStyle>
            Share Feedback
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar

// import React from 'react';
// import {  Link } from "react-router-dom";
// const Navbar= () =>{
//   return (
//   <div>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/About">AboutUs</Link>
//     </li>
//     <li>
//       <Link to="/Map">Maps</Link>
//     </li>
//     <li>
//       <Link to="/Feedback">Feedback</Link>
//     </li>
//   </div>
//   );
// }
// export default Navbar;