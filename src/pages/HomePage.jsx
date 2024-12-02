import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-4">Products</h2>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default HomePage;
