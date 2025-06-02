"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-100 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-[#241832] hover:bg-gray-200 dark:hover:bg-[#4A2C7A] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primaryColor dark:focus:ring-[#9D7BEA] focus:ring-offset-2 dark:focus:ring-offset-[#0F0A1A] group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Sun Icon */}
      <Sun
        className={`h-5 w-5 text-amber-500 transition-all duration-500 ease-in-out transform ${
          theme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />

      {/* Moon Icon */}
      <Moon
        className={`absolute top-2 left-2 h-5 w-5 text-[#9D7BEA] transition-all duration-500 ease-in-out transform ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-400/20 dark:from-purple-400/20 dark:to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
    </button>
  );
}
