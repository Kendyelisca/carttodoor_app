import "./product.css";
import { ShopContext } from "../../contexts/shop-context";
import { useContext } from "react";

// Define the Product component, which represents an individual product
const Product = (props) => {
  // Destructure the data properties from the props
  const { id, productName, price, productImage } = props.data;

  // Access addToCart function and cartItems from the ShopContext
  const { addToCart, cartItems } = useContext(ShopContext);

  // Determine the quantity of this product in the cart
  const cartItemAmount = cartItems[id] || 0;

  return (
    <div className="product" key={id}>
      <div className="img">
        <img src={productImage} alt={productName} />
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>:${price}
        </p>
      </div>
      <button className="cartBtn" onClick={() => addToCart(id)}>
        Add to cart{cartItemAmount > 0 && <>({cartItemAmount})</>}{" "}
        {/* Display the quantity in the cart if greater than 0 */}
      </button>
    </div>
  );
};

export default Product;
