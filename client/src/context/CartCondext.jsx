import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart", cart);
  }, [cart]);

  const addToCart = async (product) => {
    try {
      if (!currentUser) {
        navigate("/login");
        return;
      }
      if (cart.find((item) => item.id == product.id)) {
        window.alert("Product already exists in the cart!");
        return;
      }

      const newCart = [...cart, { ...product, quantity: 1 }];

      const response = await axios.put(
        `http://localhost:3000/users/${currentUser?.id}`,
        { ...currentUser, cart: newCart }
      );

      setCart(newCart);
      setCurrentUser({ ...currentUser, cart: newCart });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...currentUser, cart: newCart })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
    setCurrentUser({ ...currentUser, cart: newCart });
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...currentUser, cart: newCart })
    );
  };

  const clearCart = () => {
    setCart([]); 
    setCurrentUser({ ...currentUser, cart: [] }); 
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...currentUser, cart: [] })
    );
    localStorage.removeItem("cart"); 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}