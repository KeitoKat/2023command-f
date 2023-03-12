import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/About">About Us</Link>
    </li>
    <li>
      <Link to="/Maps">Mpas</Link>
    </li>
    <li>
      <Link to="/Feedback">Feedback</Link>
    </li>
  </div>
  );
}
export default navbar;