"use client";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import { HiCheck } from "react-icons/hi";
import { useEscrowStore } from "@/store/useEscrowStore";
import Image from "next/image";
import usdc from "@/public/images/usdc.svg";

interface ModalProps {
  onPrevious?: () => void;
  closeModal?: () => void;
}

export default function PreviewModal({ onPrevious, closeModal }: ModalProps) {
  let buyer = "0x74949...794";
  let seller = "0x84839...854";
  const { getEscrowData, completeStep, resetStore } = useEscrowStore();
  const escrowData = getEscrowData();

  // Handle confirmation
  const handleConfirm = () => {
    completeStep('preview');
    resetStore();
    if (closeModal) closeModal();
  };

  return (
    <div className="fixed left-1/2 top-1/2 h-screen w-screen -ml-[50vw] -mt-[50vh] z-20 bg-gray-400/20 backdrop-blur-sm transition duration-400 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-300">
          <div className="flex w-full justify-end">
            <FaXmark className="cursor-pointer" onClick={closeModal} />
          </div>
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

          <div className="-ml-4 w-20 h-px bg-[#2D0561]"></div>

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

          <div className="-ml-4 w-16 h-px bg-[#2D0561]"></div>

          {/* Payment */}
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-[#2D0561] rounded-full">
              <HiCheck className="text-white text-lg" />
            </div>
            <div className="mt-12 -ml-10">
              <span className="text-[#958F8F] font-medium text-[12px]">
                Payment
              </span>
            </div>
          </div>

          <div className="-ml-2 w-16 h-px bg-[#2D0561]"></div>

          {/* Preview */}
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center border-2 border-[#2D0561] rounded-full">
              <div className="w-2 h-2 bg-[#2D0561] rounded-full">
                <div className="mt-4 -ml-5">
                  <span className="text-[#958F8F] font-medium text-[12px]">
                    Preview
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Preview */}
        <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-800">Contract Summary</h3>

          {/* Contract Info */}
          <div className="p-4">
            <div className="text-sm space-y-2">
              <div className="flex text-lg">
                <span>Escrow Type:</span>
                <span className="font-semibold">Goods and Services</span>
              </div>
              <div className="flex text-lg">
                <span>Total Escrow Amount:</span>
                <span className="font-semibold flex gap-1">
                  {escrowData?.paymentAmount ? escrowData.paymentAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                  <Image src={usdc} alt="USDC" width={16} height={16} />
                </span>
              </div>
              <div className="flex text-lg">
                <span>Parties Involved:</span>
                <span className="font-semibold">{buyer}, Seller {seller}</span>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="p-4 rounded-md">
            <h4 className="font-semibold text-lg text-gray-700 mb-2">Milestone Details</h4>
            <div className="text-sm space-y-2">
              {escrowData.payment && (
                <div className="mt-3">
                  <table className="min-w-full border border-gray-300 rounded">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Milestone Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Condition</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Percentage</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Amount ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {escrowData.payment.percentageBreakdown.map((item, index) => (
                        <tr key={index} className="border-b border-gray-300">
                          <td className="border border-gray-300 px-4 py-2">{item.stage}</td>
                          <td className="border border-gray-300 px-4 py-2">{escrowData.condition?.title || "Not specified"}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.percentage}%</td>
                          <td className="border border-gray-300 px-4 py-2">
                            {((parseFloat(escrowData.paymentAmount || "0") * item.percentage) / 100).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Terms & Agreements */}
          <div>
            <h4 className="font-semibold text-lg text-gray-700 mb-1">Terms & Agreements</h4>
            <div className="text-base text-gray-600">
              <p>By signing this contract, both parties agree to the terms and conditions outlined above. Funds will be held in escrow according to the payment structure and released upon completion of the specified milestones and conditions.</p>
            </div>
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
            onClick={handleConfirm}
            className="px-6 py-2 w-[323px] h-[52px] bg-[#2D0561] text-white rounded-[4px] hover:bg-[#2d0561ee] focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-offset-2"
          >
            Confirm & Sign
          </button>
        </div>
      </div>
    </div>
  );
}