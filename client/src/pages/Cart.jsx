import React, { useContext, useState } from "react";
import { DataProvider } from "../context/DataContext";

function Cart() {
  
  const [cart, setCart] = useState([]);

 

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Shopping Cart</h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-3 text-gray-800">{product.name}</h3>
            <p className="text-green-600 font-bold text-xl">₹{product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-3 mb-3">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-4" />
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
                <p className="text-green-600 font-bold">₹{item.price}</p>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                  Remove
                </button>
              </div>
            ))}
            <h3 className="text-xl font-bold mt-4 text-gray-800">Total: ₹{totalPrice}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;




