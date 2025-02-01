import React, { useContext } from "react";
import { DataProvider } from "../context/DataContext"; 
import CollectionCard from "../components/productComponents/CollectionCard";

function Bedroom() {
  const { product } = useContext(DataProvider);


  const bedroomData = product ? product.filter((item) => item.type === "Bedroom Furniture") : []

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Bedroom Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bedroomData.map((item,index) => (
          
          <CollectionCard product={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Bedroom;
