import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FaTimes, FaBars } from "react-icons/fa";
import { UserContext } from "../../contexts/user-context";
const Navbar = () => {
  const { user } = useContext(UserContext) ?? {}; // Provide an empty object as a default
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="./store-logo.png" alt="Store Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <div className="bar"></div>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <div className="bar"></div>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link to="/cart" className="cart">
          <PiShoppingCart />
        </Link>
        <div className="profile-container"> </div>{" "}
        <Link to={user ? "/account" : "/login"} className="profile">
          <RxHamburgerMenu />
          <CgProfile />
          {user && user.userName && <div className="user">{user.userName}</div>}
        </Link>
        <div className="menu" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      {isMenuOpen && (
        <div className="menu-options">
          {user && user.userName && <li className="user">{user.userName}</li>}
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default Navbar;
