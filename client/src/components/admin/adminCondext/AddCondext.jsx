import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const AdminContext = createContext();


export function AdminProvider({ children }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
       
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const response = await axios.post("http://localhost:3000/products", product);
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const removeProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/products/${updatedProduct.id}`,
        updatedProduct
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? response.data : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <AdminContext.Provider value={{ products, addProduct, removeProduct, updateProduct }}>
      {children}
    </AdminContext.Provider>
  );
}
