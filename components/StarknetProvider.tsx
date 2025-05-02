"use client";
import React from "react";
import {
  StarknetConfig,
  jsonRpcProvider,
  starkscan,
} from "@starknet-react/core";
import ControllerConnector from "@cartridge/connector/controller";

// Define your contract addresses
const ETH_TOKEN_ADDRESS: `0x${string}` =
  "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";

// Define session policies type inline
const policies = {
  contracts: {
    [ETH_TOKEN_ADDRESS]: {
      methods: [
        {
          name: "approve",
          entrypoint: "approve",
          description: "Approve spending of tokens",
        },
        { name: "transfer", entrypoint: "transfer" },
      ],
    },
  },
};

// Define custom chain objects with rpcUrl and rpcUrls properties

const mainnet = {
  id: BigInt(1), 
  network: "mainnet",
  name: "Starknet",
  nativeCurrency: {
    address: ETH_TOKEN_ADDRESS,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrl: "https://api.cartridge.gg/x/starknet/mainnet",
  rpcUrls: {
    default: {
      http: ["https://api.cartridge.gg/x/starknet/mainnet"],
    },
    public: {
      http: ["https://api.cartridge.gg/x/starknet/mainnet"],
    },
  },
  testnet: false,
  blockExplorers: {
    default: { name: "Starkscan", url: "https://starkscan.co" },
  },
};

const sepolia = {
  id: BigInt(2),
  network: "sepolia",
  name: "Starknet Sepolia Testnet",
  nativeCurrency: {
    address: ETH_TOKEN_ADDRESS,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia",
  rpcUrls: {
    default: {
      http: ["https://api.cartridge.gg/x/starknet/sepolia"],
    },
    public: {
      http: ["https://api.cartridge.gg/x/starknet/sepolia"],
    },
  },
  testnet: true,
  blockExplorers: {
    default: { name: "Starkscan", url: "https://starkscan.co" },
  },
};

// Initialize the connector outside of any React component
const connector = new ControllerConnector({
  policies,
  chains: [mainnet, sepolia],
  defaultChainId: sepolia.id.toString(), 
});

// Configure RPC provider
const provider = jsonRpcProvider({
  rpc: (chain: any) => {
    switch (chain) {
      case mainnet:
        return { nodeUrl: mainnet.rpcUrls.default.http[0] };
      case sepolia:
      default:
        return { nodeUrl: sepolia.rpcUrls.default.http[0] };
    }
  },
});

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  return (
    <StarknetConfig
      autoConnect
      chains={[mainnet, sepolia]}
      provider={provider}
      connectors={[connector]}
      explorer={starkscan}
    >
      {children}
    </StarknetConfig>
  );
}
