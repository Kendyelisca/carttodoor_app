import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      {" "}
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="./store-logo.png" />
          </Link>
        </div>
        <ul>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <div className="bar"></div>
          <li>
            <a href="#teachers">Services</a>
          </li>
          <div className="bar"></div>
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
    </div>
  );
};

export default Navbar;
