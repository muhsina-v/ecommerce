import React, { useContext } from "react";
import { CartContext } from "../context/CartCondext";


function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    clearCart();
    alert("Payment Successful!");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-4" />
                <p className="text-lg font-semibold">{item.name}</p>
              </div>

              <p className="font-semibold">Quantity: {item.quantity}</p>
              <p className="text-green-600 font-bold">₹{item.price*item.quantity}</p>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold text-gray-800">Total: ₹{totalPrice}</h3>
            <button 
              onClick={handlePayment}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;