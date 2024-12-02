import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (orders.length > 0) {
      setOrderDetails(orders[orders.length - 1]); // Get the most recent order
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-500 text-xl">No order details found.</p>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold my-4">Order Confirmation</h2>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold text-lg">Order Details</h3>
        <p className="mt-2">Order Date: {orderDetails.orderDate}</p>
        <p className="mt-2">Total Amount: ₹{orderDetails.totalAmount}</p>
        <h4 className="mt-4 font-semibold">Delivery Address:</h4>
        <p>{orderDetails.address}</p>
        <h4 className="mt-4 font-semibold">Payment Method:</h4>
        <p>{orderDetails.paymentMethod}</p>

        <h4 className="mt-4 font-semibold">Items:</h4>
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-1">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
        <Link to="/" className="block mt-6 text-center text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
