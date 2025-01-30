import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DataProvider = createContext();

function DataContext({ children }) {
  const [product, setproduct] = useState([]);
  //const [loading,setloading]=usestate();

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setproduct(response.data);
      } catch (error) {
        console.log("error fetching data : ", error);
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <DataProvider.Provider value={{ product, error }}>
      {children}
    </DataProvider.Provider>
  );
}
export default DataContext;
