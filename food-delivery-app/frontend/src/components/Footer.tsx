// src/components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-white text-sm">
          &copy; 2024 Foodies Delight. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
