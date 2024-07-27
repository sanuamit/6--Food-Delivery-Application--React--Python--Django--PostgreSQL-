// src/pages/Menu.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../components/MenuItem";

interface MenuItemData {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItemData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get<MenuItemData[]>(
          "http://localhost:8000/menu"
        );
        setMenuItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching menu items:", err);
        setError("Failed to load menu items. Please try again later.");
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <div className="text-center">Loading menu items...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
