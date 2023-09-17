import React from "react";
import './Header.css'
import logo from './pizzaLogo.png'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <div className="navbar">
      <div className="leftSide">
         <NavLink to='/'>
         <img src={logo} />
         </NavLink>
      </div>
      <div className="rightSide ">
        <NavLink to="/" className={({isActive}) => `text-white ${isActive ? "text-orange-500" : "text-white"}` } > Home </NavLink>
        <NavLink to="/menu" className={({isActive})=>`text-white ${isActive ? "text-orange-500":"text-white"} hover:text-orange-500`}> Menu </NavLink>
        <NavLink to="/about" className={({isActive})=>`text-white ${isActive ? "text-orange-500":"text-white"} hover:text-orange-500`}> About </NavLink>
        <NavLink to="/contact" className={({isActive})=>`text-white ${isActive ? "text-orange-500":"text-white"} hover:text-orange-500`}> Contact </NavLink>
      </div>
    </div>
  );
}


export default Header





