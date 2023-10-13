import "./product.css";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { useNavigate } from "react-router-dom";
// Define the Product component, which represents an individual product
const Product = (props) => {
  // Destructure the data properties from the props
  const { id, name, price, description, productImgs } = props.data;
  const { addToCart, cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const cartItemAmount = cartItems[id] || 0;
  const navigate = useNavigate(); // Initialize the navigate function

  const handleAddToCart = () => {
    if (!user) {
      alert("You must log in to add products to cart.");
      navigate("/login");
    } else {
      addToCart(id);
      alert(id);
    }
  };

  return (
    <div className="product" key={id}>
      <div className="img">
        <img src={productImgs[0].url} alt={name} />
      </div>
      <div className="description">
        <p>{description}</p>
        <p>
          <b>{name}</b>:${price}
        </p>
      </div>
      <button className="cartBtn" onClick={handleAddToCart}>
        Add to cart{cartItemAmount > 0 && <>({cartItemAmount})</>}{" "}
        {/* Display the quantity in the cart if greater than 0 */}
      </button>
    </div>
  );
};

export default Product;
