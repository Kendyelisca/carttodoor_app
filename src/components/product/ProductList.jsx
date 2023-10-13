import { ShopContext } from "../../contexts/shop-context";
import { useContext } from "react";
import Product from "./Product";
import "./productList.css";

const ProductList = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="product-container">
      <div className="products">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
