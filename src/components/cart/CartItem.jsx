import "./cart.css";
import { useContext } from "react";
import { ShopContext } from "../../contexts/shop-context";

// Define the CartItem component, which represents an individual item in the cart
const CartItem = (props) => {
  // Destructure the data properties from the props
  const { id, productName, price, productImage } = props.data;

  // Access cartItems and cart manipulation functions from the ShopContext
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <div className="img-product">
        <img src={productImage} alt={productName} />
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>
          :${price}
        </p>
      </div>
      <div className="countHandler">
        {/* Button to remove an item from the cart */}
        <button className="btn-cart" onClick={() => removeFromCart(id)}>
          -
        </button>
        {/* Input field to display and edit the quantity of this item in the cart */}
        <input
          value={cartItems[id]} // Display the current quantity from the cart
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)} // Handle changes to the quantity
        />
        {/* Button to add an item to the cart */}
        <button className="btn-cart" onClick={() => addToCart(id)}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
