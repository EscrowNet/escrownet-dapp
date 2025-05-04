"use client";
import React, { useState } from "react";
import { useWallet } from "@/context/WalletContext";
import WalletOptionsModal from "./WalletOptionsModal";

function WalletConnector() {
  const { isConnected, isConnecting, address, disconnect } = useWallet();
  const [showModal, setShowModal] = useState(false);

  // Format address for display (show first 6 and last 4 characters)
  const formatAddress = (addr: string) => {
    if (!addr) return "";
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const handleConnectClick = () => {
    setShowModal(true);
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      console.log("Disconnected wallet");
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {isConnected && address ? (
        <div className="flex items-center gap-2">
          <div className="px-4 py-2 bg-[#F7F5F9] rounded-lg text-sm">
            {formatAddress(address)}
          </div>
          <button
            onClick={handleDisconnect}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-[#F7F5F9] transition-colors"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnectClick}
          disabled={isConnecting}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>
      )}

      {showModal && <WalletOptionsModal handleClose={handleCloseModal} />}
    </>
  );
}

export default WalletConnector;