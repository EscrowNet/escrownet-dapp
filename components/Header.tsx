"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../public/svg/Logo";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <header className="flex justify-between items-center py-4 md:py-6 px-6 lg:px-[120px] bg-transparent text-[#64537B] relative">
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

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="block md:hidden text-gray-700 focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            animate={{ d: menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }}
          />
        </svg>
      </motion.button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-16 left-0 w-full md:hidden bg-white shadow-md rounded-b-lg p-4 z-40"
          >
            <ul className="flex flex-col space-y-4 text-lg text-gray-700">
              {["Escrow", "Explore", "API"].map((item, i) => (
                <motion.li
                  key={item}
                  variants={menuItemVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="hover:text-gray-500 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link href={item === "Escrow" ? "/" : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-primaryColor text-white px-[46px] py-3 lg:py-[14px] rounded hover:bg-[#64537B] transition-all duration-300 ease-in-out text-base leading-[25px]"
        onClick={() => router.push("/dashboard")}
      >
        Launch App
      </motion.button>
    </header>
  );
};

export default Header;
