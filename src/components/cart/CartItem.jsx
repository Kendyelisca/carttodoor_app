import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);

  // Ensure that props.data is defined
  if (!props.data) {
    console.warn("Invalid data."); // Log a warning
    return null; // Handle the case when data is missing or incomplete
  }

  const { id, name, price, productImgs } = props.data;

  const handleRemoveFromCart = () => {
    removeFromCart(id); // Log and call the removeFromCart function
  };

  const handleAddToCart = () => {
    const newQuantity = cartItems[id] + 1; // Calculate the new quantity

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
