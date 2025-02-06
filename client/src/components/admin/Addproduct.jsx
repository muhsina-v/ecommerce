import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Addproduct() {
  const  [product,setproduct]=useState()

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response=await axios.get('http://localhost:3000/products')
        setproduct(response.product);
        console.log("dataa",product);
        
      }catch(error){
        console.error("Error fetching data:",error)
      }
    };
    fetchData();

  },[]);



  return (
    <div > 
      <img src={product.image} alt="" />

    </div>
  )
}

export default Addproduct