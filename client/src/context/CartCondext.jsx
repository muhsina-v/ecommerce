import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


export const CartContext = createContext();

const clearCart = () => {
    setCart([]); // ✅ This will empty the cart
  };
  


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
        window.alert("product altredy exist");
        return;
      }
      console.log(cart);

      const newCart = [...cart, { ...product, quantity: 1 }];

      const response = await axios.put(
        `http://localhost:3000/users/${currentUser?.id}`,
        { ...currentUser, cart: newCart }
      );
      console.log(cart);
      setCart(newCart);
      setCurrentUser({ ...currentUser, cart: newCart });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...currentUser, cart: newCart })
        
      );
      toast.success("Removed from Cart! 🗑️");
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item)=>item.id !== productId)
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setCurrentUser({ ...currentUser,cart :newCart });
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...currentUser, cart: newCart })
    );
  };
  
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
