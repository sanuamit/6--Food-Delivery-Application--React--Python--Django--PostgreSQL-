// src/components/OrderForm.tsx

import React, { useState } from "react";
import axios from "axios";

const OrderForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/orders/", {
        name,
        address,
        phone,
        items: [], // Handle item selection here
      });
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Form</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Address:
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Phone:
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
