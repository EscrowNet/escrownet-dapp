import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-50 mx-8">
      <div className="text-lg font-bold  text-[#64537B]">@escrownet</div>

    
      <nav className="flex-1 ml-8">
        <ul className="flex space-x-8 text-lg text-gray-700">
          <li className="hover:text-gray-500 cursor-pointer">Escrow</li>
          <li className="hover:text-gray-500 cursor-pointer">Explore</li>
          <li className="hover:text-gray-500 cursor-pointer">API</li>
        </ul>
      </nav>
      <button className="bg-[#2D0561] text-white px-6 py-2 rounded-md hover:bg-gray-300">
        Launch App
      </button>
    </header>
  );
};

export default Header;
