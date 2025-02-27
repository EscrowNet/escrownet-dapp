"use client";
import { useDisconnect } from "@starknet-react/core";
import React, { useMemo, useState } from "react";
import ClickOutsideWrapper from "./outsideClick";
import { Copy, LogOut, SquareArrowUpRight, Check } from "lucide-react";

function AddressBar({ address }: { address: string }) {
  const { disconnect } = useDisconnect();
  const [showDisconnect, setShowDisconnect] = useState(false);
  const [copied, setCopied] = useState(false);

  const shortenedAddress = useMemo(
    () => (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ""),
    [address]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <button
        className="bg-primaryColor text-[#ffffff] font-bold py-2 px-4 rounded-[4px]"
        onClick={() => setShowDisconnect((prev) => !prev)}
      >
        {shortenedAddress}
      </button>
      {showDisconnect && (
        <ClickOutsideWrapper
          onClickOutside={() => setShowDisconnect(false)}
          className="absolute top-[100%] right-[1rem] pl-4 pr-4 pt-4 pb-2 rounded bg-white w-[40%] z-10 shadow-lg"
        >
          <div className="flex items-center justify-between pb-2 border-b-2 border-[#C4C4C4]">
            <p className="text-center font-sans text-[0.875rem] font-medium leading-[1.5625rem] text-[rgba(58,58,58,0.70)]">
              Wallet
            </p>
            <button
              type="button"
              className="inline-flex justify-center items-center gap-[0.625rem] shrink-0 rounded border border-[#D9D9D9]
              text-center font-sans text-[0.75rem] font-normal leading-[1.5625rem] text-[rgba(58,58,58,0.70)]
              w-[2.3125rem] h-[2.1875rem] p-[0.625rem]"
              onClick={() => setShowDisconnect(false)}
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-[1rem] p-4 relative h-fit overflow-y-auto bg-[#F7F5F9] rounded-lg mt-[14px]">
            <div className="flex justify-between items-center mb-[11px] text-xs text-black leading-6">
              <h3 className=" font-semibold">Connected</h3>
              <button
                onClick={() => disconnect()}
                className="flex items-center gap-x-1"
              >
                Disconnect <LogOut size={12} />
              </button>
            </div>
            <div className="flex items-center gap-x-2 mb-3">
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full">
                <img src="/argent.svg" className="w-4" alt="" />
              </div>
              <span className="font-bold text-base">{shortenedAddress}</span>
            </div>
            <div className="flex items-center gap-4 text-sm leading-6">
              <a
                href={`https://sepolia.voyager.online/contract/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1"
              >
                View on explorer <SquareArrowUpRight size={12} />
              </a>
              <button
                onClick={handleCopy}
                className="flex items-center gap-x-1"
              >
                {copied ? (
                  <>
                    Copied! <Check size={14} />
                  </>
                ) : (
                  <>
                    Copy to clipboard <Copy size={12} />
                  </>
                )}
              </button>
            </div>
          </div>
        </ClickOutsideWrapper>
      )}
    </>
  );
}

export default AddressBar;
