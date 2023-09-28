import { useEffect, useState } from "react";
import Product from "./Product";
import "./productList.css";
import axios from "axios"; // Import Axios

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store the fetched products

  useEffect(() => {
    // Make an HTTP GET request to your backend API
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        // Set the products state with the data received from the API
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array to run the effect only once

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
