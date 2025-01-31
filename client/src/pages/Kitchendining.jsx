import React, { useContext } from 'react'
import { DataProvider } from '../context/DataContext';
import CollectionCard from '../components/productComponents/CollectionCard';


function Kitchendining() {
  const {product}=useContext(DataProvider);

  const diningdata=product ? product.filter((item)=>item.type==="Living Room Furniture") :[]

  
 
  return (
    <div className="bg-gray-100 min-h-screen p-6">
       <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Kitchen & Dining</h1>

       <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Kitchen & Dining</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          { diningdata.map((item,index) => (
            <CollectionCard product={item} index={index}/>
          ))}
        </div>
      </div> </div>

  )
}

export default Kitchendining;