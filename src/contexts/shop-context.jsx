import { useState, createContext } from "react";
import { PRODUCTS } from "../productData";

// Create a new context called ShopContext
export const ShopContext = createContext(null);

// Function to initialize the default cart with all items set to 0 quantity

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Define the ShopContextProvider component
export const ShopContextProvider = (props) => {
  // Initialize state using the useState hook with the default cart
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Function to calculate the total amount in the cart

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Find the product information using the item's ID
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        // Calculate the total amount for this item and add it to the total
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    // Update the cart by increasing the quantity of the specified item

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    // Update the cart by decreasing the quantity of the specified item
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      // If the quantity becomes 0, remove the item from the cart
      if (updatedCart[itemId] === 0) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  // Function to update the quantity of a specific item in the cart
  const updateCartItemCount = (newAmount, itemId) => {
    // Update the cart with the new quantity for the specified item
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Create a context value object containing cart-related functions and data
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  // Render the ShopContext.Provider component with the context value
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
