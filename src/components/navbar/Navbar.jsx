import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./store-logo.png" />
      </div>
      <ul>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#teachers">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
