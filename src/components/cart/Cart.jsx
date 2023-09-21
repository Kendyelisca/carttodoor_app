import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useContext } from "react";
import { ShopContext } from "../../contexts/shop-context";
import { PRODUCTS } from "../../productData";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";
const Cart = () => {
  // Access cartItems and getTotalCartAmount function from the ShopContext
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  // Calculate the total cart amount
  let totalAmount = getTotalCartAmount();

  // Use the useNavigate hook from React Router DOM for navigation
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="cart-container">
        {/* Map through the product data and render CartItem components for items in the cart */}
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          // If the item quantity in the cart is 0, it won't be rendered
          return null;
        })}
        {totalAmount > 0 ? (
          <div className="checkout">
            {/* Display the subtotal and buttons for continuing shopping and checkout */}
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          // If the cart is empty, display a message
          <h2>Your cart is Empty</h2>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
