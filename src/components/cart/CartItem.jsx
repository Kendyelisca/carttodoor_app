import React, { useContext } from "react";
import { ShopContext } from "../../contexts/shop-context";

const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  console.log("CartItem Data:", props.data);
  console.log("Cart Items:", cartItems); // Log cartItems
  console.log("Context Functions:", {
    addToCart,
    removeFromCart,
    updateCartItemCount,
  }); // Log context functions

  // Ensure that props.data is defined
  if (!props.data) {
    console.warn("Invalid data."); // Log a warning
    return null; // Handle the case when data is missing or incomplete
  }

  const { id, name, price, description, productImgs, quantity } = props.data;

  const handleRemoveFromCart = () => {
    console.log("Removing item from cart:", id);
    removeFromCart(id); // Log and call the removeFromCart function
  };

  const handleAddToCart = () => {
    const newQuantity = cartItems[id] + 1; // Calculate the new quantity
    console.log("Adding item to cart:", id);
    updateCartItemCount(newQuantity, id); // Call updateCartItemCount with the new quantity
  };

  return (
    <div className="cartItem">
      <div className="img-product">
        <img src={productImgs[0].url} alt={name} />
      </div>
      <div className="description">
        <p>
          <b>{name}</b>: ${price}
        </p>
      </div>
      <div className="countHandler">
        <button className="btn-cart" onClick={handleRemoveFromCart}>
          -
        </button>
        <input
          value={cartItems[id] || 0} // Default to 0 if the item is not in the cart
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button className="btn-cart" onClick={handleAddToCart}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
