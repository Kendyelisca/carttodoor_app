import { Link } from "react-router-dom";
import "./navbar.css";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
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
        <Link to="/cart" className="cart">
          <PiShoppingCart />
        </Link>
        <div className="profile-container"> </div>{" "}
        <Link to="/login" className="profile">
          <RxHamburgerMenu />
          <CgProfile />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
