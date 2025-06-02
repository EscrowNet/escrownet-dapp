"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../public/svg/Logo";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

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
    <header className="flex justify-between items-center py-4 md:py-6 px-6 lg:px-[120px] bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm border-b border-gray-200/20 dark:border-dark-border/30 text-[#64537B] dark:text-dark-text-primary relative  transition-all duration-300">
      <div className="flex items-center gap-x-[22px]">
        <Link href="/">
          <span className="text-[#64537B] dark:text-dark-accent">
            <Logo />
          </span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex gap-x-6 text-base leading-6 font-semibold">
            <li>
              <Link
                href="/"
                className="hover:text-primaryColor dark:hover:text-dark-accent transition-colors duration-200"
              >
                Escrow
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className="hover:text-primaryColor dark:hover:text-dark-accent transition-colors duration-200"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/api"
                className="hover:text-primaryColor dark:hover:text-dark-accent transition-colors duration-200"
              >
                API
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="block md:hidden text-gray-700 dark:text-dark-text-primary focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              animate={{
                d: menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16",
              }}
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-16 left-0 w-full md:hidden bg-white dark:bg-dark-surface shadow-md dark:shadow-dark-border/20 rounded-b-lg p-4 z-40 border-t dark:border-dark-border"
          >
            <ul className="flex flex-col space-y-4 text-lg text-gray-700 dark:text-dark-text-primary">
              {["Escrow", "Explore", "API"].map((item, i) => (
                <motion.li
                  key={item}
                  variants={menuItemVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="hover:text-primaryColor dark:hover:text-dark-accent cursor-pointer transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link
                    href={item === "Escrow" ? "/" : `/${item.toLowerCase()}`}
                  >
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
        className="hidden md:block bg-primaryColor dark:bg-dark-accent text-white dark:text-dark-bg px-[46px] py-3 lg:py-[14px] rounded hover:bg-[#64537B] dark:hover:bg-dark-purple-light transition-all duration-300 ease-in-out text-base leading-[25px] font-semibold"
        onClick={() => router.push("/dashboard")}
        aria-label="Launch Dashboard App"
      >
        Launch App
      </motion.button>
    </header>
  );
};

export default Header;
