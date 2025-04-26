"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import WalletOptionsModal from "./WalletOptionsModal";

function ConnectButton() {
  const [connectModalIsOpen, setConnectModalIsOpen] = useState(false);
  return (
    <>
      {connectModalIsOpen &&
        createPortal(
          <WalletOptionsModal handleClose={() => setConnectModalIsOpen(false)} />,
          document.body
        )}
      <button
        className="bg-primaryColor text-[#ffffff] font-bold py-2 px-4 rounded-[4px]"
        onClick={() => {
          console.log("clicking connect wallet");
          setConnectModalIsOpen(true);
        }}
      >
        Connect Wallet
      </button>
    </>
  );
}

export default ConnectButton;
