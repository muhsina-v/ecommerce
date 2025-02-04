import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionCard from '../components/productComponents/CollectionCard';

function Collections() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setData(response.data);
        console.log("dataaa",data);
        
      } catch (error) {
        console.error("Error fetching data:",error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Our Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((product,index) => (
         
          <CollectionCard product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Collections;
