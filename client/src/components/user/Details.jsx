import React, { useContext } from "react";
import { DataProvider } from "../context/DataContext"; 
import { useParams } from "react-router-dom";

function Details() {
  const { product } = useContext(DataProvider);
  const {id}=useParams()

  //const decorData = product ? product.filter((item) => item.type === "Decor") : [];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Home Decor Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
