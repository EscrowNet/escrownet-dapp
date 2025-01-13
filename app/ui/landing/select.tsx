"use client";

import Image from "next/image";
import ArrowDown from "@/public/icons/arrow-down.svg";
import { useState } from "react";

type Option = {
  id: number;
  name: string;
  icon?: any;
};

type SelectProps = {
  options: Option[];
  defaultValue?: Option;
  className?: string;
};

export function Select({ options, defaultValue, className }: SelectProps) {
  const [selected, setSelected] = useState(defaultValue || null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelected = (option: Option) => {
    setSelected(option);
    toggleClick();
  };

  const toggleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={`relative h-10 w-full ${className || ""}`}>
      <div className="h-full bg-gray-light rounded-md px-3 flex items-center text-xs">
        {selected && (
          <div key={selected.id} className="flex items-center gap-2">
            {selected.icon && <Image src={selected.icon} alt="usdt" />}
            <p>{selected.name}</p>
          </div>
        )}
      </div>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-gray-dark py-1 px-2"
        onClick={toggleClick}
      >
        <Image
          src={ArrowDown}
          alt="select currency"
          className={showOptions ? "rotate-180" : ""}
        />
      </button>
      {showOptions && (
        <div className="absolute right-0 top-12 shadow-2xl z-10 w-64 min-h-8 max-h-48 bg-gray-light rounded-md text-xs p-2 flex flex-col gap-2 overflow-auto">
          {options.map((option) => (
            <div
              key={option.id}
              className={`flex items-center gap-2 hover:bg-white rounded-md p-1 ${
                selected && option.id === selected.id && "bg-white"
              }`}
              onClick={() => handleSelected(option)}
            >
              {option.icon && <Image src={option.icon} alt="usdt" />}
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
