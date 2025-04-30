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
        className="bg-primaryColor text-[#ffffff] font-bold py-2 px-4 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor hover:bg-opacity-90 transition-colors"
        onClick={() => {
          setConnectModalIsOpen(true);
        }}
        aria-haspopup="dialog"
        aria-expanded={connectModalIsOpen}
        aria-label="Connect wallet"
      >
        Connect Wallet
      </button>
    </>
  );
}

export default ConnectButton;
