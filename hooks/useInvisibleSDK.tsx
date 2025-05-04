'use client';
import { useState, useEffect, useCallback } from 'react';
import type { ArgentInvisibleClient, WalletConnectionState } from "@argent/invisible-sdk";

// Define config type for better type safety
interface ArgentConfig {
  projectId: string;
  metadata: {
    name: string;
    description: string;
    url: string;
    icons: string[];
  };
  defaultNetwork: string;
}

interface UseInvisibleSDKReturn {
  client: ArgentInvisibleClient | null;
  isInitialized: boolean;
  isConnecting: boolean;
  isConnected: boolean;
  address: string | null;
  chainId: number | null;
  error: Error | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

// Create a singleton instance of the client
let argentClient: ArgentInvisibleClient | null = null;
let initializationPromise: Promise<void> | null = null;

export function useInvisibleSDK(): UseInvisibleSDKReturn {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [connectionState, setConnectionState] = useState<WalletConnectionState>({
    isConnected: false,
    address: null,
    chainId: null,
  });
  const [error, setError] = useState<Error | null>(null);

  // Initialize the SDK
  const initialize = useCallback(async () => {
    // If we already have a client, return immediately
    if (argentClient) {
      setIsInitialized(true);
      return;
    }
    
    // If initialization is already in progress, wait for it
    if (initializationPromise) {
      await initializationPromise;
      setIsInitialized(true);
      return;
    }
    
    // Start initialization
    initializationPromise = (async () => {
      try {
        console.log("Starting Argent Invisible SDK initialization");
        
        // Dynamically import the SDK to prevent SSR issues
        const { createArgentInvisibleClient } = await import('@argent/invisible-sdk');
        
        // Get the origin safely only on client side
        const origin = typeof window !== 'undefined' 
          ? window.location.origin 
          : 'https://your-app-url.com';
        
        // Log environment variable to help debug
        console.log("WalletConnect Project ID available:", 
          !!process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID);
        
        // Configuration for Argent Invisible SDK
        const ARGENT_CONFIG: ArgentConfig = {
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
          metadata: {
            name: 'Escrownet',
            description: 'Your application description',
            url: origin,
            icons: [`${origin}/logo.png`]
          },
          defaultNetwork: 'sepolia', 
        };
        
        console.log("Creating Argent client with config:", {
          projectId: ARGENT_CONFIG.projectId ? "[MASKED]" : "MISSING",
          metadata: ARGENT_CONFIG.metadata,
          defaultNetwork: ARGENT_CONFIG.defaultNetwork
        });
        
        // Create the client
        argentClient = createArgentInvisibleClient(ARGENT_CONFIG);
        
        // Initialize the client
        console.log("Initializing Argent client...");
        await argentClient.init();
        console.log("Argent client initialized successfully!");
        
        // Check if already connected
        const state = argentClient.getConnectionState();
        console.log("Initial connection state:", state);
        setConnectionState(state);
        
        // Set up event listeners
        argentClient.on('connect', (state: { address: any; chainId: any; }) => {
          console.log("Connected event received:", state);
          setConnectionState({
            isConnected: true,
            address: state.address || null,
            chainId: state.chainId || null,
          });
          setIsConnecting(false);
        });
        
        argentClient.on('disconnect', () => {
          console.log("Disconnect event received");
          setConnectionState({
            isConnected: false,
            address: null,
            chainId: null,
          });
        });
        
        argentClient.on('chainChanged', (chainId: any) => {
          console.log("Chain changed event:", chainId);
          setConnectionState((prev) => ({
            ...prev,
            chainId,
          }));
        });
        
        argentClient.on('accountsChanged', (accounts: any[]) => {
          console.log("Accounts changed event:", accounts);
          setConnectionState((prev) => ({
            ...prev,
            address: accounts[0] || null,
          }));
        });
        
        setIsInitialized(true);
        console.log("Argent hook fully initialized");
      } catch (err) {
        console.error("Failed to initialize Argent Invisible SDK:", err);
        setError(err instanceof Error ? err : new Error('Failed to initialize SDK'));
        // Reset initialization promise on error
        initializationPromise = null;
      }
    })();
    
    await initializationPromise;
  }, []);

  // Initialize SDK on mount
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      initialize().catch(err => {
        console.error("Error during initialization:", err);
      });
    }
   
    return () => {
      if (argentClient) {
        argentClient.removeAllListeners();
      }
    };
  }, [initialize]);

  // Connect to wallet
  const connect = useCallback(async () => {
    setError(null);
    
    // If not initialized yet, wait for initialization
    if (!argentClient) {
      console.log("Client not available, initializing first...");
      await initialize();
    }
    
    if (!argentClient) {
      const error = new Error("Argent Invisible SDK not initialized");
      console.error(error);
      setError(error);
      throw error;
    }
    
    try {
      setIsConnecting(true);
      console.log("Starting wallet connection process...");
      
      // Check if already connected
      if (connectionState.isConnected) {
        console.log("Already connected, no need to connect again");
        setIsConnecting(false);
        return;
      }
      
      // Connect with the SDK
      console.log("Calling connect on Argent client...");
      await argentClient.connect();
      
      // Get the updated connection state
      const state = argentClient.getConnectionState();
      console.log("Connection successful, new state:", state);
      setConnectionState(state);
      
      setIsConnecting(false);
    } catch (err) {
      setIsConnecting(false);
      console.error("Failed to connect with Argent Invisible SDK:", err);
      setError(err instanceof Error ? err : new Error('Failed to connect wallet'));
      throw err;
    }
  }, [initialize, connectionState.isConnected]);

  // Disconnect wallet
  const disconnect = useCallback(async () => {
    if (!argentClient) {
      console.log("No client available to disconnect");
      return;
    }
    
    try {
      console.log("Disconnecting wallet...");
      await argentClient.disconnect();
      
      // Update the connection state
      setConnectionState({
        isConnected: false,
        address: null,
        chainId: null,
      });
      console.log("Wallet disconnected successfully");
    } catch (err) {
      console.error("Failed to disconnect wallet:", err);
      setError(err instanceof Error ? err : new Error('Failed to disconnect wallet'));
      throw err;
    }
  }, []);

  return {
    client: argentClient,
    isInitialized,
    isConnecting,
    isConnected: connectionState.isConnected,
    address: connectionState.address,
    chainId: connectionState.chainId,
    error,
    connect,
    disconnect,
  };
}

export default useInvisibleSDK;