// src/pages/Home.tsx

import React from "react";
import Menu from "./Menu";
import OrderForm from "../components/OrderForm";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome to Foodies Delight
          </h1>
          <p className="text-center text-gray-700 mb-8">
            Discover our delicious menu and place your order easily.
          </p>
          <Menu />
          <OrderForm />
        </div>
      </main>
    </div>
  );
};

export default Home;
