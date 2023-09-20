import { PRODUCTS } from "../../productData";
import Product from "./Product";
import "./productList.css";

const ProductList = () => {
  return (
    <div className="product-container">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
