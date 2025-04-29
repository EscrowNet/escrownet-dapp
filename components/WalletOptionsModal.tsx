"use client";
import React from "react";
import LockBodyScroll from "./LockBodyScroll";

function WalletOptionsModal({ handleClose }: { handleClose: () => void }) {
  // Handlers for wallet selection (just logging for now as per requirements)
  const handleInvisibleSDK = () => {
    console.log("Invisible SDK selected");
    handleClose();
  };

  const handleCartridgeController = () => {
    console.log("Cartridge Controller selected");
    handleClose();
  };

  return (
    <>
      <LockBodyScroll lock={true} />
      <div
        className="absolute inset-0 flex justify-center pt-[200px] bg-white bg-opacity-80 backdrop-blur-sm"
        onClick={handleClose}
      >
        <div
          className="px-6 py-[18px] bg-white rounded w-[450px] border-[#C4C4C4] border h-fit"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-2 border-b-2 border-[#C4C4C4]">
            <p className="text-center font-sans text-[0.875rem] font-medium leading-[1.5625rem] text-[rgba(58,58,58,0.70)]">
              Choose a Wallet Sign-In Method
            </p>

            <button
              type="button"
              className="inline-flex justify-center items-center gap-[0.625rem] shrink-0 rounded border border-[#D9D9D9]
              text-center font-sans text-[0.75rem] font-normal leading-[1.5625rem] text-[rgba(58,58,58,0.70)]
              w-[2.3125rem] h-[2.1875rem] p-[0.625rem]"
              onClick={handleClose}
            >
              X
            </button>
          </div>
          
          <div className="flex flex-col gap-y-2 mt-[14px]">
            <button
              className="bg-[#F7F5F9] rounded-lg px-4 py-[21px] flex items-center gap-x-2 text-base font-medium cursor-pointer"
              onClick={handleInvisibleSDK}
            >
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L4 6V12C4 15.31 7.58 19.85 12 22C16.42 19.85 20 15.31 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Use Invisible SDK
            </button>
            
            <button
              className="bg-[#F7F5F9] rounded-lg px-4 py-[21px] flex items-center gap-x-2 text-base font-medium cursor-pointer"
              onClick={handleCartridgeController}
            >
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              Use Cartridge Controller
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletOptionsModal; 