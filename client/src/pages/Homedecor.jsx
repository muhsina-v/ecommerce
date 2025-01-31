import React, { useContext } from "react";
import { DataProvider } from "../context/DataContext"; 
import CollectionCard from "../components/productComponents/CollectionCard";

function Homedecor() {
  const { product } = useContext(DataProvider);

  const decorData = product ? product.filter((item) => item.type === "Decor") : [];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Home Decor Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {decorData.map((item,index) => (
         <CollectionCard product={item} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default Homedecor;
