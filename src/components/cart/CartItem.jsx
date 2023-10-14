import { useContext } from "react";

const CartItem = (props) => {
  const { cartItems, updateCartItemCount } = useContext(CartContext);

  if (!props.data) {
    return null; // Handle the case when data is missing or incomplete
  }

  const { id, name, price, productImgs } = props.data;

  // Use optional chaining to access quantity from cartItems object
  const quantity = cartItems?.[id] || 0;

  const handleRemoveFromCart = () => {
    if (cartItems?.[id] && cartItems[id] > 0) {
      const newQuantity = cartItems[id] - 1;
      updateCartItemCount(newQuantity, id);
    }
  };

  const handleAddToCart = () => {
    const newQuantity = (cartItems?.[id] || 0) + 1;
    updateCartItemCount(newQuantity, id);
  };

  return (
    <div className="cartItem">
      <div className="img-product">
        <img src={productImgs[0]?.url} alt={name} />{" "}
        {/* Use optional chaining to handle potential null or undefined values */}
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
          value={quantity}
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
