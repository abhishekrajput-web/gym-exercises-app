import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.png";
const Logo = () => {
  return (
    <Link to="/">
    <img src={logo} width={80} height={80} alt="logo" />
    </Link>
  )
}

export default Logo;