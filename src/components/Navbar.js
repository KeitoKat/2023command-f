import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/About">AboutUs</Link>
    </li>
    <li>
      <Link to="/Maps">Maps</Link>
    </li>
    <li>
      <Link to="/Feedback">Feedback</Link>
    </li>
  </div>
  );
}
export default Navbar;