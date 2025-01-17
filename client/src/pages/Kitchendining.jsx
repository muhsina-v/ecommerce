import React from 'react'


function Kitchendining() {
  
  const kitchenDiningFurniture = [
    { id: 4, name: "Modern Dining Table", price: "$200", img: "https://i.pinimg.com/564x/c2/86/50/c286506ba6fbbd6439f3f56c0a122394.jpg" },
    { id: 5, name: "Kitchen Storage Cabinet", price: "$150", img: "https://i.pinimg.com/564x/a9/36/34/a93634f2602531cb6ed3f5de204fa348.jpg" },
    { id: 6, name: "Bar Stools Set", price: "$120", img: "https://i.pinimg.com/564x/36/74/34/3674342821e9a8f435e30e0e564ad6a2.jpg" }
  ];
  return (
    <div className="bg-gray-100 min-h-screen p-6">
       <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Kitchen & Dining</h1>

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
      </div> </div>

  )
}

export default Kitchendining;