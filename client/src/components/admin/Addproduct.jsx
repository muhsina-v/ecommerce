import React, { useContext, useState } from 'react';
import { AdminContext } from './adminCondext/AddCondext';

function Addproduct() {
  const { products, addProduct, removeProduct, updateProduct } = useContext(AdminContext);
  const [newProduct, setNewProduct] = useState({
    id: '',
    image: '',
    imageCategory: '',
    description: '',
    offerPrice: '',
    price: '',
  });
  const [editingProduct, setEditingProduct] = useState(null);

  if (products.length === 0) return <div className="p-4 text-center">Loading...</div>;

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({
      id: '',
      image: '',
      imageCategory: '',
      description: '',
      details:'',
      type:'',
       price:'',
       offerPrice: '',
    });
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  const handleUpdateProduct = () => {
    updateProduct(editingProduct);
    setEditingProduct(null);
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Add Product Form */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="ID"
            value={newProduct.id}
            onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.imageCategory}
            onChange={(e) => setNewProduct({ ...newProduct, imageCategory: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Offer Price"
            value={newProduct.offerPrice}
            onChange={(e) => setNewProduct({ ...newProduct, offerPrice: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="p-2 border rounded"
          />
           <input
            type="text"
            placeholder="details"
            value={newProduct.details}
            onChange={(e) => setNewProduct({ ...newProduct, details: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="name"
            value={newProduct.type}
            onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-950"
        >
          Add Product
        </button>
      </div>

    {/* product */}
        {editingProduct && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="ID"
              value={editingProduct.id}
              onChange={(e) => setEditingProduct({ ...editingProduct, id: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={editingProduct.image}
              onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={editingProduct.imageCategory}
              onChange={(e) => setEditingProduct({ ...editingProduct, imageCategory: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={editingProduct.description}
              onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Offer Price"
              value={editingProduct.offerPrice}
              onChange={(e) => setEditingProduct({ ...editingProduct, offerPrice: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Price"
              value={editingProduct.price}
              onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
              className="p-2 border rounded"
            />
             <input
            type="text"
            placeholder="details"
            value={editingProduct.details}
            onChange={(e) => setEditingProduct({ ...editingProduct, details: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="name"
            value={editingProduct.type}
            onChange={(e) => setEditingProduct({ ...editingProduct, type: e.target.value })}
            className="p-2 border rounded"
          />
          </div>
          <button
            onClick={handleUpdateProduct}
            className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
          >
            Update Product
          </button>
        </div>
      )}

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded overflow-hidden">
            <img
              src={product.image}
              alt={product.imageCategory}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.imageCategory}</h2>
              <p className="text-black-500 text-sm">{product.description}</p>
              <h4 className="text-black-500 text-sm">{product.type}</h4>
              <div className="mt-2 flex justify-between">
                <span className="text-red-500 line-through">₹{product.offerPrice}</span>
                <span className="text-green-600 font-bold ml-2">₹{product.price}</span>
                <button
                  onClick={() => handleEditClick(product)}
                  className="px-2 py-1 bg-blue-800 text-white rounded hover:bg-blue-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  className="px-2 py-1 bg-red-700 text-white rounded hover:bg-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addproduct;