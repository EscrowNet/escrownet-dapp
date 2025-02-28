"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import ConnectModal from "./ConnectModal";

function ConnectButton() {
  const [connectModalIsOpen, setConnectModalIsOpen] = useState(false);
  return (
    <>
      {connectModalIsOpen &&
        createPortal(
          <ConnectModal handleClose={() => setConnectModalIsOpen(false)} />,
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
