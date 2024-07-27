// src/pages/Checkout.tsx

import React, { useState } from "react";

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Checkout</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address:
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone:
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Payment Method:
            </label>
            <div className="flex space-x-4 mt-2">
              <div>
                <input
                  type="radio"
                  id="creditCard"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={handlePaymentChange}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="creditCard" className="ml-2 text-gray-700">
                  Credit Card
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paypal"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={handlePaymentChange}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="paypal" className="ml-2 text-gray-700">
                  PayPal
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Complete Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
