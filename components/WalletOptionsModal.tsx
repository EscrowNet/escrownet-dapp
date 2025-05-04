"use client";
import React, { useEffect, useRef } from "react";
import LockBodyScroll from "./LockBodyScroll";
import { useConnect } from "@starknet-react/core";

function WalletOptionsModal({ handleClose }: { handleClose: () => void }) {
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const { connect, connectors } = useConnect();

  useEffect(() => {
    if (firstButtonRef.current) {
      firstButtonRef.current.focus();
    }

    const handleEscKeyEvent = () => {
      handleClose();
    };

    document.addEventListener("escrownet:escapePressed", handleEscKeyEvent);

    return () => {
      document.removeEventListener("escrownet:escapePressed", handleEscKeyEvent);
    };
  }, [handleClose]);

  const handleInvisibleSDK = () => {
    console.log("Invisible SDK selected");
    handleClose();
  };

  const handleCartridgeController = async () => {
    const controller = connectors.find(
      (c) => c.constructor.name === "ControllerConnector"
    );
    if (!controller) {
      console.error("Cartridge Controller connector not found");
      return;
    }
    try {
      await connect({ connector: controller });
      console.log("Cartridge Controller connected");
      handleClose();
    } catch (error) {
      console.error("Failed to connect Cartridge Controller:", error);
    }
  };

  return (
    <>
      <LockBodyScroll lock={true} />
      <div
        className="fixed inset-0 flex justify-center pt-[200px] bg-white bg-opacity-80 backdrop-blur-sm z-50"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wallet-options-title"
      >
        <div
          className="px-6 py-[18px] bg-white rounded w-[450px] border-[#C4C4C4] border h-fit shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-2 border-b-2 border-[#C4C4C4]">
            <h2
              id="wallet-options-title"
              className="text-center font-sans text-[0.875rem] font-medium leading-[1.5625rem] text-[rgba(58,58,58,0.70)]"
            >
              Choose a Wallet Sign-In Method
            </h2>

            <button
              type="button"
              className="inline-flex justify-center items-center gap-[0.625rem] shrink-0 rounded border border-[#D9D9D9]
              text-center font-sans text-[0.75rem] font-normal leading-[1.5625rem] text-[rgba(58,58,58,0.70)]
              w-[2.3125rem] h-[2.1875rem] p-[0.625rem] focus:outline-none focus:ring-2 focus:ring-primaryColor"
              onClick={handleClose}
              aria-label="Close wallet options"
            >
              X
            </button>
          </div>

          <div className="flex flex-col gap-y-2 mt-[14px]">
            <button
              ref={firstButtonRef}
              className="bg-[#F7F5F9] rounded-lg px-4 py-[21px] flex items-center gap-x-2 text-base font-medium cursor-pointer hover:bg-[#EFEAF3] transition-colors focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-2"
              onClick={handleInvisibleSDK}
              aria-label="Connect with Invisible SDK"
            >
              <div
                className="w-10 h-10 flex justify-center items-center rounded-full bg-white"
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4 6V12C4 15.31 7.58 19.85 12 22C16.42 19.85 20 15.31 20 12V6L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Use Invisible SDK
            </button>

            <button
              className="bg-[#F7F5F9] rounded-lg px-4 py-[21px] flex items-center gap-x-2 text-base font-medium cursor-pointer hover:bg-[#EFEAF3] transition-colors focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-2"
              onClick={handleCartridgeController}
              aria-label="Connect with Cartridge Controller"
            >
              <div
                className="w-10 h-10 flex justify-center items-center rounded-full bg-white"
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="6"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 11H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
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
