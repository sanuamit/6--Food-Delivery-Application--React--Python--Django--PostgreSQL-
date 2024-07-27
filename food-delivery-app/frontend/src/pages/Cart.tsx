// src/pages/Cart.tsx

import React from "react";

interface CartItemProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Cart: React.FC = () => {
  const cartItems: CartItemProps[] = [
    { id: 1, name: "Burger", quantity: 2, price: 10.99 },
    { id: 2, name: "Fries", quantity: 1, price: 5.99 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <span className="text-indigo-600 font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-lg font-semibold text-gray-900">Total</h3>
            <span className="text-indigo-600 font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <button className="mt-6 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
