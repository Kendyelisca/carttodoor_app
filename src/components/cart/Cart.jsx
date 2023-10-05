import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import axios from "axios";
import { ShopContext } from "../../contexts/shop-context";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  // Use the useNavigate hook from React Router DOM for navigation
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is authenticated (token exists in local storage)
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      // If no token exists, set redirect to true and navigate to login
      setRedirect(true);
      alert("You must log in to access your cart.");
      navigate("/login");
      return;
    }

    // Fetch cart items from the backend
    axios
      .get("http://localhost:8080/carts", {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((response) => {
        // Log the API response

        // Combine product data with quantity information
        const productsWithQuantity = response.data.map((cartItem) => {
          const productData = cartItem.product;
          const quantity = cartItem.quantity;
          return {
            ...productData,
            quantity,
          };
        });

        setCartProducts(productsWithQuantity);
        setLoading(false);
      })
      .catch((error) => {
        // Handle unauthorized or other errors here
        console.error(error);
      });
  }, [navigate]);

  if (redirect) {
    return null; // You can also render a loading or login component here
  }

  // Calculate the total cart amount based on cartItems
  let totalAmount = getTotalCartAmount();

  return (
    <>
      <Navbar />
      <div className="cart-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          Array.from(new Set(cartProducts.map((product) => product.id))).map(
            (id) => {
              const uniqueProduct = cartProducts.find(
                (product) => product.id === id
              );
              return <CartItem key={uniqueProduct.id} data={uniqueProduct} />;
            }
          )
        )}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <div>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button onClick={() => navigate("/checkout")}>Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h2>Your cart is Empty</h2>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
