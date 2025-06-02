"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import WalletOptionsModal from "./WalletOptionsModal";

function ConnectButton() {
  const [connectModalIsOpen, setConnectModalIsOpen] = useState(false);
  return (
    <>
      {connectModalIsOpen &&
        createPortal(
          <WalletOptionsModal
            handleClose={() => setConnectModalIsOpen(false)}
          />,
          document.body
        )}
      <button
        className="bg-primaryColor dark:bg-dark-accent text-[#ffffff] dark:text-dark-bg font-bold py-2 px-4 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor dark:focus:ring-dark-accent dark:focus:ring-offset-dark-bg hover:bg-opacity-90 dark:hover:bg-dark-accent/90 transition-colors duration-200"
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
