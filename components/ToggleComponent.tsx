"use client";
import { useState, useEffect } from "react";

interface IToggleSwitch {
  activeStateAction: () => void;
}
export const ToggleSwitch: React.FC<IToggleSwitch> = ({ activeStateAction }) => {
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
    className={`w-[3.125rem] h-[1.40625rem] flex items-center bg-gray-300 rounded-full p-[2px] cursor-pointer transition-all 
      ${isOn ? "bg-green-500" : "bg-gray-300"}`}
    onClick={handleToggle}
  >
    <div
      className={`w-[1.09375rem] h-[1.09375rem] bg-white rounded-full shadow-md transform transition-transform 
        ${isOn ? "translate-x-[1.71875rem]" : "translate-x-0"}`}
    />
  </div>
  );
};
