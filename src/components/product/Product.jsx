import "./product.css";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="product" key={id}>
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>:${price}
        </p>
      </div>
      <button className="cartBtn">Add to cart</button>
    </div>
  );
};

export default Product;
