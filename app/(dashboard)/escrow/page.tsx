"use client";

import { contracts } from "@/data/mock-data";
import Contract from "../../../components/Contracts";
import { useReadContract } from "@starknet-react/core";
import DashboardContentContainer from "../../../components/DashboardContentContainer";
import { ContractInterface } from "@/types/types";
import ModalWorkflow from "@/components/modal-component/modal-workflow/Workflow";
import { useState } from "react";

function Escrows() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const { data, error, isLoading, isError } = useReadContract({
    abi: [
        {
          "type": "function",
          "name": "get_escrow_contracts",
          "inputs": [],
          "outputs": [
            {
              "type": "core::array::Array::<core::starknet::contract_address::ContractAddress>"
            }
          ],
          "state_mutability": "view"
        }
    ] as const,
    functionName: "get_escrow_contracts",
    address: "0x070211a2a9dd05092df51e080732d0a390b5b8353078e7a78a686af71689dfea",
    args: [],
  });

  const openInExplorer = (address: string) => {
    window.open(`https://sepolia.voyager.online/contract/${address}`, '_blank');
  };

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    // Optional: add toast notification for feedback
  };

  // Utility function to convert decimal to hex address
  const decimalToHexAddress = (decimalStr: string) => {
    // Convert decimal string to BigInt
    const decimal = BigInt(decimalStr);
    // Convert to hex, remove '0x' prefix, pad to ensure even length
    let hexString = decimal.toString(16);
    // Ensure even length
    if (hexString.length % 2 !== 0) {
      hexString = '0' + hexString;
    }
    // Return with 0x prefix
    return '0x' + hexString;
  };

  // Handle loading state
  if (isLoading) {
    return <div>Loading addresses...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error loading addresses: {error?.message || "Unknown error"}</div>;
  }

  return (
    <>
      <div className="p-6 w-full h-full">
        <DashboardContentContainer
          title="Escrow Transaction"
          className="w-full min-h-[195px] mt-[1.5rem]"
        >
          <div className="relative text-left">
            <p className="font-medium text-sm pr-8">
              Protect your funds and ensure trust in every deal by using escrow.
              Your money stays safe until all terms are met, giving both you and
              your counterparty peace of mind. Make your first escrow payment
              today.!!
            </p>
            <button
              className=" mt-2 px-6 py-2 bg-[#2D0561] text-white font-medium rounded transition"
              onClick={() => setShowCreateModal(true)}
            >
              Create Escrow Contract
            </button>
          </div>
        </DashboardContentContainer>

        <DashboardContentContainer
          title="Your active contracts"
          className="w-full  h-[34rem] mt-[2.4rem]"
        >
          <div className="grid grid-cols-2 gap-5">
            {contracts.map((contract: ContractInterface) => (
              <Contract
                key={contract.title}
                title={contract.title}
                image={contract.image}
                location={contract.location}
                period={contract.period}
                amount={contract.amount}
                client={contract.client}
              />
            ))}
            {contracts.map((contract: ContractInterface) => (
              <Contract
                key={contract.title}
                title={contract.title}
                image={contract.image}
                location={contract.location}
                period={contract.period}
                amount={contract.amount}
                client={contract.client}
              />
            ))}
          </div>
        </DashboardContentContainer>

        <DashboardContentContainer
          title="All contracts"
          className="w-full  h-[34rem] mt-[2.4rem]"
        >
  
            
          <div className="space-y-4">
            {data && data.map((address: string, index: number) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#2D05610A] rounded-lg">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-medium text-slate-900">{decimalToHexAddress(address)}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    className=" mt-2 px-6 py-2 bg-[#2D0561] text-white font-medium rounded transition"
                    onClick={() => openInExplorer(decimalToHexAddress(address))}
                  > Open in Voyager
                  </button>
                </div>
              </div>
            ))}
          </div>
    
        </DashboardContentContainer>
      </div>
      {showCreateModal && <ModalWorkflow closeModal={() => setShowCreateModal(false)} />}
    </>
  );
}
export default Escrows;
