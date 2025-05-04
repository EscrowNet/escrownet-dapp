import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
export function ConnectWallet() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  // Find the controller connector from connectors array
  const controller = connectors.find(
    (c) => c.constructor.name === "ControllerConnector"
  );
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    if (!address || !controller) return;
    (controller as any)
      .username()
      .then((n: string) => setUsername(n))
      .catch(() => setUsername(undefined));
  }, [address, controller]);

  return (
    <div>
      {address && (
        <>
          <p>Account: {address}</p>
          {username && <p>Username: {username}</p>}
        </>
      )}
      {address ? (
        <button onClick={() => disconnect()}>Disconnect</button>
      ) : (
        <button
          onClick={() => {
            if (controller) {
              connect({ connector: controller });
            }
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
}
