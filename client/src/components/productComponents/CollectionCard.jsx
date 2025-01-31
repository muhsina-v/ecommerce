import React from 'react'
import { useNavigate } from 'react-router-dom'

function CollectionCard({product,index}) {
    const navigate=useNavigate()

  return (
    <div
    onClick={()=>navigate(`/product/details/${product?.id}`)}
    key={index}
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
  )
}

export default CollectionCard