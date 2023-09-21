import { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { ShopContext } from "../../contexts/shop-context"; // Import your shopping cart context
import { UserContext } from "../../contexts/user-context";
const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const { user } = useContext(UserContext);
  console.log(user);
  // Calculate the total quantity of items in the cart
  const totalQuantityInCart = Object.values(cartItems).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

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
          {totalQuantityInCart > 0 && ( // Render the dot if there are items in the cart
            <div className="cart-badge">{totalQuantityInCart}</div>
          )}
        </Link>
        <div className="profile-container"> </div>{" "}
        <Link to="/login" className="profile">
          <RxHamburgerMenu />
          <CgProfile />
          {!!user && <div className="user">{user.userName}</div>}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
