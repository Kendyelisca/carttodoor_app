import "./product.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  // Destructure the data properties from the props
  const { id, name, price, description, productImgs } = props.data;

  const { user } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleAddToCart = () => {
    if (!user) {
      alert("You must log in to add products to the cart.");
      navigate("/login");
    } else {
      alert(`Product ${id} added to the cart`);
    }
  };

  return (
    <div className="product" key={id}>
      <div className="img">
        {productImgs && productImgs[0] && productImgs[0].url ? (
          <img src={productImgs[0].url} alt={name} />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className="description">
        <p>{description}</p>
        <p>
          <b>{name}</b>: ${price}
        </p>
      </div>
      <button className="cartBtn" onClick={handleAddToCart}>
        Add to cart
        {/* Display the quantity in the cart if greater than 0 */}
      </button>
    </div>
  );
};

export default Product;
