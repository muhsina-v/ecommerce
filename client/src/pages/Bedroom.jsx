import React, { useContext } from "react";
import { DataProvider } from "../context/DataContext"; // Correct context import
import CollectionCard from "../components/productComponents/CollectionCard";

function Bedroom() {
  const { product } = useContext(DataProvider);

  // Ensure product is not undefined
  const bedroomData = product ? product.filter((item) => item.type === "Bedroom Furniture") : []

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Bedroom Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bedroomData.map((item,index) => (
          // <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
          //   <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
          //   <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
          //   <p className="text-gray-600">{item.price}</p>
          //   <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          //     Add to Cart
          //   </button>
          // </div>
          <CollectionCard product={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Bedroom;
