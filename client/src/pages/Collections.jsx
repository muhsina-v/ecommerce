import React from 'react';

function Collections() {
  // Sample data for each category
  const decorItems = [
    { id: 1, name: "Wall Art Painting", price: "$35", img: "https://i.pinimg.com/564x/76/29/a4/7629a40b6d244d7d06650cb763f3eac0.jpg" },
    { id: 2, name: "Ceramic Vase", price: "$20", img: "https://i.pinimg.com/564x/3a/80/4e/3a804ef0999db2366f9f18d53fd0557b.jpg" },
    { id: 3, name: "Decorative Mirror", price: "$50", img: "https://i.pinimg.com/564x/b6/7a/3a/b67a3a4ef1b953002a9231618bb02c2a.jpg" }
  ];

  const kitchenDiningFurniture = [
    { id: 4, name: "Modern Dining Table", price: "$200", img: "https://i.pinimg.com/564x/c2/86/50/c286506ba6fbbd6439f3f56c0a122394.jpg" },
    { id: 5, name: "Kitchen Storage Cabinet", price: "$150", img: "https://i.pinimg.com/564x/a9/36/34/a93634f2602531cb6ed3f5de204fa348.jpg" },
    { id: 6, name: "Bar Stools Set", price: "$120", img: "https://i.pinimg.com/564x/36/74/34/3674342821e9a8f435e30e0e564ad6a2.jpg" }
  ];

  const bedroomFurniture = [
    { id: 7, name: "King Size Bed Frame", price: "$300", img: "https://i.pinimg.com/564x/ed/0b/80/ed0b80d541fdab5e923cb0e1cb76eaad.jpg" },
    { id: 8, name: "Wooden Wardrobe", price: "$250", img: "https://i.pinimg.com/564x/9e/5b/4f/9e5b4f8b14d68c6b3b7264c7a9bfc179.jpg" },
    { id: 9, name: "Bedside Nightstand", price: "$80", img: "https://i.pinimg.com/564x/21/eb/c2/21ebc23b7d8a6a76cd790575d2be08d5.jpg" }
  ];

  const livingRoomFurniture = [
    { id: 10, name: "Luxury Sofa Set", price: "$500", img: "https://i.pinimg.com/564x/68/04/c1/6804c14b4c906e3b9e9a4e8b267c3ef7.jpg" },
    { id: 11, name: "Wooden Coffee Table", price: "$120", img: "https://i.pinimg.com/564x/57/41/f7/5741f7a3a02b17c50e09124de63cc418.jpg" },
    { id: 12, name: "TV Stand & Console", price: "$180", img: "https://i.pinimg.com/564x/6e/6d/5c/6e6d5c8c4f780bfbf7cc8cd4172d9882.jpg" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Collections</h1>

      {/* Decor Items */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Decor Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {decorItems.map(item => (
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

      {/* Kitchen & Dining Furniture */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Kitchen & Dining</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kitchenDiningFurniture.map(item => (
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

      {/* Bedroom Furniture */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bedroom</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bedroomFurniture.map(item => (
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

      {/* Living Room Furniture */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Living Room </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {livingRoomFurniture.map(item => (
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
    </div>
  );
}

export default Collections;
