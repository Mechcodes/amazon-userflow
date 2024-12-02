import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Item removed from the cart.');
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-500 text-xl">Your cart is empty.</p>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold my-4">Your Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center border p-4 rounded shadow"
          >
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <p>₹{product.price}</p>
            </div>
            <button
              onClick={() => handleRemove(product.id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">
          Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
        </p>
        <Link to="/checkout">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
