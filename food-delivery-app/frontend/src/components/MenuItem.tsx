// src/components/MenuItem.tsx

import React from "react";

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-lg font-bold text-green-500">${price.toFixed(2)}</p>
    </div>
  );
};

export default MenuItem;
