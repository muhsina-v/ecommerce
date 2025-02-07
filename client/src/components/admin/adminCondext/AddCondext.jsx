import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const AdminContext = createContext();

// The AdminProvider component will wrap parts of your app that need access to product data.
export function AdminProvider({ children }) {
  // State to hold the list of products
  const [products, setProducts] = useState([]);

  // Fetch products from the JSON server when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        // Assuming your API returns an array of products
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to add a new product
  const addProduct = async (product) => {
    try {
      // Send a POST request to add the new product on the server
      const response = await axios.post("http://localhost:3000/products", product);
      // Update state with the newly added product
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Function to remove a product by its id
  const removeProduct = async (productId) => {
    try {
      // Send a DELETE request to remove the product from the server
      await axios.delete(`http://localhost:3000/products/${productId}`);
      // Update state by filtering out the removed product
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  // Function to update an existing product
  const updateProduct = async (updatedProduct) => {
    try {
      // Send a PUT request to update the product on the server
      const response = await axios.put(
        `http://localhost:3000/products/${updatedProduct.id}`,
        updatedProduct
      );
      // Update state by replacing the old product with the updated one
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? response.data : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Provide the products and the CRUD functions to child components
  return (
    <AdminContext.Provider value={{ products, addProduct, removeProduct, updateProduct }}>
      {children}
    </AdminContext.Provider>
  );
}
