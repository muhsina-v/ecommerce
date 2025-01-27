import React from 'react'


function Homedecor() {
  const decorItems = [
    { id: 1, name: "Wall Art Painting", price: "$35", img: "https://i.pinimg.com/564x/76/29/a4/7629a40b6d244d7d06650cb763f3eac0.jpg" },
    { id: 2, name: "Ceramic Vase", price: "$20", img: "https://i.pinimg.com/564x/3a/80/4e/3a804ef0999db2366f9f18d53fd0557b.jpg" },
    { id: 3, name: "Decorative Mirror", price: "$50", img: "https://i.pinimg.com/564x/b6/7a/3a/b67a3a4ef1b953002a9231618bb02c2a.jpg" }
  ];
  return (
    <div className="bg-gray-100 min-h-screen p-6">
       <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Homedecor</h1>

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
     
        </div> </div>

  )
}

export default  Homedecor