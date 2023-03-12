import React, { useState } from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import myLogo from './Pinion_logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom';
import userImage from "./user_image.png";

const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//     };
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <>
      <PrimaryNav >
        <Hamburger />
        <Menu>    
          <Link to="./">
            <img style={{ width: 102, height: 54, marginRight: '6rem'}} src= {myLogo} alt="React Logo" />
          </Link>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/About" activeStyle>
            About Us
          </MenuLink>
          <MenuLink to="/Map" activeStyle>
            Resources
          </MenuLink>
          <MenuLink to="/Feedback" activeStyle>
            Share Feedback
          </MenuLink>
          <MenuLink to="/elevators" activeStyle>
            <img style={{ width: 220, height: 54, marginLeft: '0.5rem'}} src= {userImage} alt="React Logo" />
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