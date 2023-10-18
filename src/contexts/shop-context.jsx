import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend when the component mounts using Axios
    axios
      .get("https://carttodoormarket-back-end.onrender.com/products")
      .then((response) => {
        // Set the retrieved products in the state
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Make sure to update the contextValue with the fetched products and cart
  const contextValue = {
    products,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
