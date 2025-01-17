import React from 'react';

function Collections() {
  // Sample data for kitchen items and dinner sets
  const kitchenItems = [
    { id: 1, name: "Non-Stick Frying Pan", price: "$25", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Chef's Knife Set", price: "$40", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Wooden Chopping Board", price: "$20", img: "https://via.placeholder.com/150" }
  ];

  const dinnerSets = [
    { id: 1, name: "Classic Porcelain Dinner Set", price: "$60", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Modern Stoneware Plates", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Elegant Gold-Rimmed Set", price: "$75", img: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Collections</h1>

      {/* Kitchen Items */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Kitchen Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kitchenItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
              <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dinner Sets */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dinner Sets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dinnerSets.map(set => (
            <div key={set.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src={set.img} alt={set.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-3">{set.name}</h3>
              <p className="text-gray-600">{set.price}</p>
              <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
