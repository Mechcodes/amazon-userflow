import React, { useState } from 'react';

const Checkout = () => {
  const [cart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handlePlaceOrder = () => {
    if (!address || !paymentMethod) {
      alert('Please fill out all the required fields.');
      return;
    }

    const order = {
      items: cart,
      address,
      paymentMethod,
      totalAmount: cart.reduce((sum, item) => sum + item.price, 0),
      orderDate: new Date().toLocaleString(),
    };

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...orders, order]));
    localStorage.removeItem('cart'); // Clear the cart after order placement
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-green-100">
        <h2 className="text-2xl font-bold text-green-700">Order Confirmed!</h2>
        <p className="mt-4">Your order has been placed successfully.</p>
        <p className="mt-2">Thank you for shopping with us!</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold my-4">Checkout</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty. Add items to proceed.</p>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2">Order Summary:</h3>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="font-bold mb-4">
            Total Amount: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
          </p>

          <h3 className="text-lg font-semibold mb-2">Delivery Address:</h3>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="4"
            className="w-full border rounded p-2 mb-4"
            placeholder="Enter your address"
          ></textarea>

          <h3 className="text-lg font-semibold mb-2">Payment Method:</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded p-2 mb-4"
          >
            <option value="" disabled>
              Select Payment Method
            </option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
            <option value="UPI">UPI</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>

          <button
            onClick={handlePlaceOrder}
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
