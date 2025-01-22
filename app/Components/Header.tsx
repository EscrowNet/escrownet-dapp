"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#F5F5F5] ">
      <div className="flex items-center space-x-8">
     
        <Link href="/">
          <div className="text-lg font-bold text-[#64537B] cursor-pointer">
            @escrownet
          </div>
        </Link>

     
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg text-gray-700">
            <li className="hover:text-gray-500 cursor-pointer">
              <Link href="/">Escrow</Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link href="/explore">Explore</Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link href="/api">API</Link>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className="block md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)} 
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto md:flex bg-white md:bg-transparent z-50 md:z-auto flex-col md:flex-row md:items-center`}
      >
        <ul className="flex flex-col md:hidden space-y-4 text-lg text-gray-700 p-4">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link href="/">
              <span onClick={() => setMenuOpen(false)}>Escrow</span>
            </Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link href="/explore">
              <span onClick={() => setMenuOpen(false)}>Explore</span>
            </Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link href="/api">
              <span onClick={() => setMenuOpen(false)}>API</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Launch App Button */}
      <Link href="/launch">
        <button className="hidden md:block bg-[#2D0561] text-white px-6 py-2 rounded-md hover:bg-gray-300">
          Launch App
        </button>
      </Link>
    </header>
  );
};

export default Header;
