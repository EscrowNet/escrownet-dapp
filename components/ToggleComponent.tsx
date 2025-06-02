"use client";
import { useState, useEffect } from "react";
import type React from "react";

interface IToggleSwitch {
  activeStateAction: () => void; // receives the function called when toggle is on
}

export const ToggleSwitch: React.FC<IToggleSwitch> = ({
  activeStateAction,
}) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      activeStateAction();
    }
  }, [isOn, activeStateAction]);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div
      className={`w-[3.125rem] h-[1.40625rem] flex items-center rounded-full p-[2px] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-bg
        ${
          isOn
            ? "bg-green-500 dark:bg-green-600 focus:ring-green-500 dark:focus:ring-green-400"
            : "bg-gray-300 dark:bg-dark-border focus:ring-gray-400 dark:focus:ring-dark-text-muted"
        }`}
      onClick={handleToggle}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <div
        className={`w-[1.09375rem] h-[1.09375rem] bg-white dark:bg-gray-100 rounded-full shadow-md transform transition-transform duration-300
          ${isOn ? "translate-x-[1.71875rem]" : "translate-x-0"}`}
      />
    </div>
  );
};
