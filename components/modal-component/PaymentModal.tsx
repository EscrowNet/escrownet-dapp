"use client";
import React, { useMemo, useEffect, useState } from "react";
import { HiCheck } from "react-icons/hi";
import Image from "next/image";
import usdc from "@/public/images/usdc.svg";
import { useEscrowStore } from "@/store/useEscrowStore";
import { useAccount, useContract, useSendTransaction } from "@starknet-react/core";
import { ABI } from "@/lib/abi/abi";
import { CallData } from "starknet";

interface ModalProps {
  onNext?: () => void;
  onPrevious?: () => void;
  closeModal: () => void;
}

const PaymentModal: React.FC<ModalProps> = ({ onNext, onPrevious, closeModal }) => {
  const {
    payments,
    paymentAmount,
    selectedPaymentStructure,
    setPaymentAmount,
    setSelectedPaymentStructure,
    completeStep
  } = useEscrowStore();
  
  const [localPaymentAmount, setLocalPaymentAmount] = useState(paymentAmount);
  const [localSelectedPaymentStructure, setLocalSelectedPaymentStructure] = useState(selectedPaymentStructure);
  const [isPaymentStructureDropdownOpen, setIsPaymentStructureDropdownOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Validate form
  useEffect(() => {
    setIsFormValid(!!localPaymentAmount && !!localSelectedPaymentStructure);
  }, [localPaymentAmount, localSelectedPaymentStructure]);

  const handlePaymentStructureClick = (paymentPercentageStructure: string) => {
    setLocalSelectedPaymentStructure(paymentPercentageStructure);
    setIsPaymentStructureDropdownOpen(false);
  };

  const handleNext = () => {
    if (!isFormValid) return;
    
    // Save data to store
    setPaymentAmount(localPaymentAmount);
    setSelectedPaymentStructure(localSelectedPaymentStructure);
    completeStep('payment');
    
    if (onNext) onNext();
  };

  const {
    address: user
  } = useAccount()

  const { contract } = useContract({
    abi: ABI,
    address: '0x070211a2a9dd05092df51e080732d0a390b5b8353078e7a78a686af71689dfea',
  })

  console.log(contract)

  let beneficiary = '0x070D878a25fdc4911b121887bc2883d02396814720807ED7cb38358Ac09a6e44'

  let beneficiary2 = '0x6474c1dc96640f06dd6cd87f8f94f2877d127f672bce98ee305f45417a4d2df'

  let arbiter = '0x0168d601Be0C2bDCD09D7568d7Ed711D2A330Cd7488E7539fA66b56144EC998f'

  const salt = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));

  const calls = useMemo(() => {
    const isInputValid = user && localPaymentAmount !== "" || false && localSelectedPaymentStructure !== "" && paymentAmount !== "" || undefined;

    if (!isInputValid || !contract ) return

    return [contract?.populate("deploy_escrow", [user, beneficiary2, arbiter, salt])]
  }, [localPaymentAmount, localSelectedPaymentStructure, paymentAmount])

  console.log(calls)

  const {
    sendAsync, data, isPending, isError, error
  } = useSendTransaction({
    calls
  })

  const deployEscrow = async () => {
    console.log('Hit the ground running')
    try {
      console.log('Keep running and trying')
      await sendAsync();
      closeModal();
    } catch (err) {
      console.log('Catching...', err)
    }
  }

  return (
    <div className="fixed left-1/2 top-1/2 h-screen w-screen -ml-[50vw] -mt-[50vh] z-20 bg-gray-400/20 backdrop-blur-sm transition duration-400 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-300">
          <h2 className="text-[16px] font-bold text-center text-gray-800">
            Create Escrow Contract
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center px-6 py-4">
          {/* Milestone */}
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-[#2D0561] rounded-full">
              <HiCheck className="text-white text-lg" />
            </div>
            <div className="mt-12 -ml-10">
              <span className="text-[#958F8F] font-medium text-[12px]">
                Milestone
              </span>
            </div>
          </div>

          <div className="w-16 -ml-4  h-px bg-[#2D0561]"></div>

          {/* Condition */}
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-[#2D0561] rounded-full">
              <HiCheck className="text-white text-lg" />
            </div>
            <div className="mt-12 -ml-10">
              <span className="text-[#958F8F] font-medium text-[12px]">
                Condition
              </span>
            </div>
          </div>

          <div className="w-16 -ml-4  h-px bg-gray-300"></div>

          {/* Payment */}
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center border-2 border-[#2D0561] rounded-full">
              <div className="w-2 h-2 bg-[#2D0561] rounded-full">
                <div className="mt-4 -ml-5">
                  <span className="text-[#958F8F] font-medium text-[12px]">
                    Payment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-16 h-px bg-gray-300"></div>

          {/* Preview */}
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full">
              <div className="mt-12 ">
                <span className="text-[#958F8F] font-medium text-[12px]">
                  Preview
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Payment Structure Dropdown */}
          <div>
            <label
              htmlFor="payment-structure"
              className="block text-sm font-medium text-gray-700"
            >
              Milestone Payment Structure
            </label>
            <div className="relative mt-2">
              <button
                onClick={() => setIsPaymentStructureDropdownOpen(!isPaymentStructureDropdownOpen)}
                className="w-full border border-[#D9D9D9] rounded-md shadow-sm pl-4 pr-8 py-2 text-left focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm bg-white"
              >
                {localSelectedPaymentStructure || "Select milestone structure"}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  ▼
                </span>
              </button>
              {isPaymentStructureDropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-[#D9D9D9]">
                  {payments.map((payment: any, index: number) => {
                    const structureText = payment.percentageBreakdown
                      .map((p: any) => `${p.stage}: ${p.percentage}%`)
                      .join(" - ");
                    
                    return (
                      <li
                        key={index}
                        onClick={() => handlePaymentStructureClick(structureText)}
                        className={`cursor-pointer px-4 py-2 hover:bg-purple-50 text-[14px] font-[500] flex flex-col space-y-1 ${
                          localSelectedPaymentStructure === structureText
                            ? "bg-purple-100 font-medium text-purple-700"
                            : "text-gray-700"
                        }`}
                      >
                        <div className="text-xs text-gray-600">
                          {structureText}
                        </div>
                        {localSelectedPaymentStructure === structureText && (
                          <div className="flex justify-end">
                            <div className="w-6 h-6 flex items-center justify-center border-2 border-[#2D0561] rounded-full">
                              <div className="w-2 h-2 bg-[#2D0561] rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>

          {/* Payment Amount */}
          <div>
            <label
              htmlFor="payment-amount"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Amount
            </label>

            <div className="relative mt-2">
              <input
                id="payment-amount"
                type="text"
                value={localPaymentAmount}
                onChange={(e) => setLocalPaymentAmount(e.target.value)}
                className="w-full border border-[#D9D9D9] rounded-md shadow-sm pl-4 pr-10 py-2 focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
                placeholder="Enter payment amount"
              />
              <div className="absolute inset-y-0 right-2 flex items-center pl-3">
                <Image
                  src={usdc}
                  alt="Payment Icon"
                  width={20}
                  height={20}
                  className="pointer-events-none"
                />
              </div>
            </div>
            <p className="text-[12px] text-gray-500 mt-2">
              Enter the total payment amount for this contract in USDC
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-[24px] px-6 py-4">
          <button
            onClick={onPrevious}
            className="px-6 py-2 w-[323px] h-[52px] bg-[#2D0561] text-white rounded-[4px] hover:bg-[#2d0561ee] focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-offset-2"
          >
            Previous
          </button>
          <button
            onClick={(e) => {
              console.log("I've been clicked")
              e.preventDefault();
              deployEscrow();
            }}
            className="px-6 py-2 w-[323px] h-[52px] bg-[#2D0561] text-white rounded-[4px] hover:bg-[#2d0561ee] focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;