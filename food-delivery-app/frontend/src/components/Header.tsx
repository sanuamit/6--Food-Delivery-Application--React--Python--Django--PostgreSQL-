// src/components/Header.tsx

import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Foodies Delight</Link>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link
            to="/menu"
            className="text-white hover:text-gray-300 transition"
          >
            Menu
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-gray-300 transition"
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="text-white hover:text-gray-300 transition"
          >
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
