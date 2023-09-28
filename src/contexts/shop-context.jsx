import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]); // State to store products

  const getDefaultCart = () => {
    let cart = {};
    for (const product of products) {
      cart[product.id] = 0;
    }
    return cart;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    // Get the user's authentication token from wherever you store it (e.g., localStorage)
    const authToken = localStorage.getItem("token");

    // Make an API request to add the item to the cart with the token in the headers
    axios
      .post(
        "http://localhost:8080/carts",
        { productId: itemId, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include the token here
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          // Update the cartItems state with the new item
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        } else {
          // Handle other status codes here
          console.error(
            "Failed to add item to cart. Status code:",
            response.status
          );
        }
      })
      .catch((error) => {
        // Handle network errors or other issues
        console.error("Error adding item to cart:", error);
      });
  };

  const removeFromCart = (itemId) => {
    // Get the user's authentication token from wherever you store it (e.g., localStorage)
    const authToken = localStorage.getItem("token");
    // Check if the item is already in the cart
    if (cartItems[itemId] > 0) {
      // Make an API request to remove the item from the cart
      axios
        .delete(`http://localhost:8080/carts/${itemId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include the token here
          },
        })
        .then((response) => {
          // Check if the API request was successful
          if (response.status === 204) {
            // Update the cartItems state by decrementing the quantity of the item
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            if (cartItems[itemId] === 1) {
              // If the quantity becomes zero, remove the item from cartItems
              const updatedCart = { ...cartItems };
              delete updatedCart[itemId];
              setCartItems(updatedCart);
            }
          } else {
            // Handle the error case if needed
            console.error("Failed to remove item from cart:", response.data);
          }
        })
        .catch((error) => {
          // Handle any network or other errors
          console.error("Error removing item from cart:", error);
        });
    }
  };

  const updateCartItemCount = (newAmount, itemId) => {
    if (newAmount >= 0) {
      // Get the user's authentication token from wherever you store it (e.g., localStorage)
      const authToken = localStorage.getItem("token");

      // Make an API request to update the item quantity in the cart with the token in the headers
      axios
        .put(
          `http://localhost:8080/carts/${itemId}`,
          { quantity: newAmount },
          {
            headers: {
              Authorization: `Bearer ${authToken}`, // Include the token here
            },
          }
        )
        .then((response) => {
          // Check if the API request was successful
          if (response.status === 200) {
            // Update the cartItems state with the new quantity
            setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
          } else {
            // Handle the error case if needed
            console.error(
              "Failed to update item quantity in cart:",
              response.data
            );
          }
        })
        .catch((error) => {
          // Handle any network or other errors
          console.error("Error updating item quantity in cart:", error);
        });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setCartItems(getDefaultCart());
  }, [products]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    loading,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {loading ? <p>Loading...</p> : props.children}
    </ShopContext.Provider>
  );
};
