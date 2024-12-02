import React from 'react';
import products from '../data/Products.js';

const ProductList = ({ onAddToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="border rounded p-4 flex flex-col items-center"
      >
        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4" />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="font-semibold mt-2">₹{product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);

export default ProductList;
