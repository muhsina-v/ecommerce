import React from 'react';

function CollectionCard({ product, index, addToCart }) {
  return (
    <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default CollectionCard;