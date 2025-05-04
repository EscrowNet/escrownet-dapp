'use client';

import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import useInvisibleSDK from '../hooks/useInvisibleSDK';

// Define the context type
interface WalletContextType {
  // Client state
  isInitialized: boolean;
  isConnecting: boolean;
  isConnected: boolean;
  address: string | null;
  chainId: number | null;
  error: Error | null;
  
  // Actions
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  
  // Optional additional wallet information
  balance: string | null;
  networkName: string | null;
}

// Create context with a default value
const WalletContext = createContext<WalletContextType>({
  isInitialized: false,
  isConnecting: false,
  isConnected: false,
  address: null,
  chainId: null,
  error: null,
  connect: async () => {},
  disconnect: async () => {},
  balance: null,
  networkName: null,
});

// Export the context hook for components to use
export const useWallet = () => useContext(WalletContext);

// Network names mapping
const NETWORK_NAMES: Record<number, string> = {
  1: 'Ethereum Mainnet',
  5: 'Goerli',
  11155111: 'Sepolia',
  // Add more networks as needed
};

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Use the Invisible SDK hook
  const {
    client,
    isInitialized,
    isConnecting,
    isConnected,
    address,
    chainId,
    error,
    connect,
    disconnect,
  } = useInvisibleSDK();
  
  // Additional wallet state
  const [balance, setBalance] = React.useState<string | null>(null);
  
  // Fetch the balance when connected
  useEffect(() => {
    const fetchBalance = async () => {
      if (client && isConnected && address) {
        try {
          // Implement balance fetching based on your specific needs
          // This is just a placeholder - replace with actual implementation
          const balanceValue = await client.getBalance?.(address);
          setBalance(balanceValue?.toString() || '0');
        } catch (err) {
          console.error('Failed to fetch balance:', err);
          setBalance('Error');
        }
      } else {
        setBalance(null);
      }
    };
    
    fetchBalance();
  }, [client, isConnected, address]);
  
  // Get network name from chainId
  const networkName = chainId ? NETWORK_NAMES[chainId] || `Chain ${chainId}` : null;
  
  // Create context value
  const contextValue: WalletContextType = {
    isInitialized,
    isConnecting,
    isConnected,
    address,
    chainId,
    error,
    connect,
    disconnect,
    balance,
    networkName,
  };
  
  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;