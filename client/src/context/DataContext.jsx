import { Axios } from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const DataProvider=createContext();



function DataContext() {
  const [product,setproduct]=useState();
  //const [loading,setloading]=usestate();
  const [eror,setError]=useState

  useEffect(()=>{
    async function fetchData {
      try{
        const response=await axios.get("/Bedroom");
        setproduct(response.data);
      }
      catch(error){
        console.log("error fetching data : ",error);
        
      }
      
      fetchData()
      
    }
  },[]);

    
  return (
    <DataProvider.Provider value={({})}>
  )
}

export default DataContext