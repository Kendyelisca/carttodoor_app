import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FaTimes, FaBars } from "react-icons/fa";
import { UserContext } from "../../contexts/user-context";

const Navbar = () => {
  const { user, logout } = useContext(UserContext) ?? {}; // Provide an empty object as a default
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false); // State for the logout confirmation dialog

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to open the logout confirmation dialog
  const openLogoutDialog = () => {
    setMenuOpen(!isMenuOpen);
    setLogoutDialogOpen(true);
  };

  // Function to close the logout confirmation dialog
  const closeLogoutDialog = () => {
    setLogoutDialogOpen(false);
  };

  // Function to handle the logout action
  const handleLogOut = () => {
    closeLogoutDialog(); // Close the confirmation dialog
    logout(); // Logout the user
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
        <div className="cart-1">
          <Link to="/cart">
            <PiShoppingCart />
          </Link>
        </div>
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
          {user && user.userName ? (
            <>
              <li className="user">{user.userName}</li>
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
                <Link to="/cart">
                  <PiShoppingCart />
                </Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <button onClick={openLogoutDialog} className="logout-button">
                  Logout
                </button>{" "}
                {/* Open the logout confirmation dialog */}
              </li>
            </>
          ) : (
            <>
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
                <Link to="/login">Login</Link> {/* Display Login option */}
              </li>
            </>
          )}
        </div>
      )}
      {isLogoutDialogOpen && (
        <div className="logout-dialog">
          <div className="logout-content">
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogOut} className="logout-button-yes">
              Yes
            </button>
            <button onClick={closeLogoutDialog} className="logout-button-no">
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
