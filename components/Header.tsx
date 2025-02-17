"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../public/svg/Logo";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="flex justify-between items-center py-4 md:py-6 px-6 lg:px-[120px] bg-transparent text-[#64537B]">
      <div className="flex items-center gap-x-[22px]">
        <Link href="/">
          <span className="text-[#64537B]">
            <Logo />
          </span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex gap-x-6 text-base leading-6 font-semibold">
            <li>
              <Link href="/">Escrow</Link>
            </li>
            <li>
              <Link href="/explore">Explore</Link>
            </li>
            <li>
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

      <button
        className="hidden md:block bg-primaryColor text-white px-[46px] py-3 lg:py-[14px] rounded hover:bg-[#64537B] transition-all duration-300 ease-in-out text-base leading-[25px]"
        onClick={() => router.push("/dashboard")}
      >
        Launch App
      </button>
    </header>
  );
};

export default Header;
