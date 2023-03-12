import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import myLogo from './Pinion_logo.png'
const Navbar = () => {
  return (
    <>
      <PrimaryNav >
        <Hamburger />
        <Menu>
          <img src= {myLogo} />
          <MenuLink to="/Home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/About" activeStyle>
            About Us
          </MenuLink>
          <MenuLink to="/Map" activeStyle>
            Maps
          </MenuLink>
          <MenuLink to="/Feedback" activeStyle>
            Feedback
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