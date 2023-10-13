import { createContext, useContext, useState } from "react";
import { ShopContext } from "./shop-context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { products } = useContext(ShopContext);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState({});

  // Define your cart-related functions here
  const getDefaultCart = (products) => {
    let cart = [];
    for (let i = 0; i < products.length; i++) {
      cart[products[i].id] = 0;
    }
    return cart;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = products.find(
          (product) => product.id === Number(itemId)
        );
        totalAmount += cartItems[itemId] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCart[itemId] === 0) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        getDefaultCart,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
