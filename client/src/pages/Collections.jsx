import React, { useState, useEffect } from 'react';
import ProductData from '../db.json';

function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const filteredProducts = ProductData.products.filter((product) => product.price >= 10);
    setCollections(filteredProducts);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Our Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {collections.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-3 text-gray-800">{product.imageCategory}</h3>
            <p className="text-gray-600">
              <span className="text-red-500 font-semibold">
                <s>₹{product.offerPrice}</s>
              </span>
              <br />
              <span className="text-green-600 font-bold text-xl">₹{product.price}</span>
            </p>
            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
