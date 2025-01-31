import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataProvider } from "../context/DataContext";

function Details() {
  const { product } = useContext(DataProvider);
  const { id } = useParams();
  const [currentProduct, setCurrntProduct] = useState({});

  useEffect(() => {
    setCurrntProduct(product?.find(item=>item.id==id))
  }, [id,product]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src={currentProduct.image}
            alt={currentProduct.description}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{currentProduct.description}</h2>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Type:</span> {currentProduct.type}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            {/* <span className="font-semibold">Category:</span> {currentProduct.category} */}
          </p>
          <p className="text-gray-600 text-lg mb-2">{currentProduct.details}</p>
          <p className="text-xl font-semibold text-gray-900 mt-4">
            Price: <span className="text-red-500 line-through">${currentProduct.offerPrice}</span> 
            <span className="ml-2 text-green-600">${currentProduct.price}</span>
          </p>

          <button className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-950 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
