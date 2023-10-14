import { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

import { UserContext } from "../../contexts/user-context";
const Navbar = () => {
  const { user } = useContext(UserContext) ?? {}; // Provide an empty object as a default

  console.log(user);
  // Calculate the total quantity of items in the cart

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
      </nav>
    </div>
  );
};

export default Navbar;
