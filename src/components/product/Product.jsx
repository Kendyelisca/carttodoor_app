import "./product.css";
import { ShopContext } from "../../contexts/shop-context";
import { useContext } from "react";

// Define the Product component, which represents an individual product
const Product = (props) => {
  // Destructure the data properties from the props
  const { id, name, price, description, productImgs } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id] || 0;

  const handleAddToCart = () => {
    addToCart(id);
    console.log(`Added product with ID ${id} to the cart.`);
    console.log("Updated cartItems:", cartItems);
  };

  console.log("Product component rendered with ID:", id);

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
