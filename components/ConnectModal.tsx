"use client";
import React from "react";
import LockBodyScroll from "./LockBodyScroll";
import { useConnect } from "@starknet-react/core";

const walletDetails = {
  argentX: { name: "Argent", subtext: "WEBSITE", icon: "/argent.svg" },
  webwallet: { name: "Argent", subtext: "MOBILE", icon: "/argent.svg" },
  braavos: { name: "Braavos", subtext: "WEBSITE", icon: "/braavos.svg" },
};
function ConnectModal({ handleClose }: { handleClose: () => void }) {
  const { connectors, connect } = useConnect();

  const getWalletDetails = (connector: any) =>
    walletDetails[connector.id as keyof typeof walletDetails] || {
      name: connector.id,
      subtext: "WEBSITE",
      icon: "/assets/wallets/argent.svg",
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
          <div className="flex items-center justify-between pb-2  border-b-2 border-[#C4C4C4]">
            <p className="text-center font-sans text-[0.875rem] font-medium leading-[1.5625rem] text-[rgba(58,58,58,0.70)]">
              Connect your wallet
            </p>

            <button
              type="button"
              className="inline-flex justify-center items-center gap-[0.625rem] shrink-0 rounded border border-[#D9D9D9]
              text-center font-sans text-[0.75rem] font-normal leading-[1.5625rem] text-[rgba(58,58,58,0.70)]
              w-[2.3125rem] h-[2.1875rem] p-[0.625rem]
              "
              onClick={handleClose}
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-y-2 mt-[14px]">
            {connectors.map((connector, index) => {
              console.log(connector);
              const details = getWalletDetails(connector);
              return (
                <button
                  className="bg-[#F7F5F9] rounded-lg px-4 py-[21px] flex items-center gap-x-2 text-base font-medium cursor-pointer"
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    connect({ connector });
                    handleClose();
                  }}
                >
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white">
                    <img src={details.icon} alt={details.name} />
                  </div>
                  {details.name} {details.subtext}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectModal;
