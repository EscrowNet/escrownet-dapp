"use client";
import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { GoDash } from "react-icons/go";
import usdc from "@/public/images/usdc.svg";
import Image from "next/image";

interface ModalProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const PaymentModal: React.FC<ModalProps> = ({ onNext, onPrevious }) => {
  const [selectedMilestone, setSelectedMilestone] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentPercentage, setPaymentPercentage] = useState("");
  const [isMilestoneDropdownOpen, setIsMilestoneDropdownOpen] = useState(false);
  const [isPaymentPercentageDropdownOpen, setIsPaymentPercentageDropdownOpen] =
    useState(false);

  const milestones = [
    {
      percentageBreakdown: [
        { stage: "Initial Deposit Paid", percentage: 50 },
        { stage: "First Draft Delivered", percentage: 25 },
        { stage: "Revisions Completed", percentage: 15 },
        { stage: "Final Delivery Approved", percentage: 10 },
      ],
    },
    {
      percentageBreakdown: [
        { stage: "Initial Deposit Paid", percentage: 25 },
        { stage: "First Draft Delivered", percentage: 25 },
        { stage: "Revisions Completed", percentage: 25 },
        { stage: "Final Delivery Approved", percentage: 25 },
      ],
    },
    {
      percentageBreakdown: [
        { stage: "Initial Deposit Paid", percentage: 20 },
        { stage: "First Draft Delivered", percentage: 20 },
        { stage: "Revisions Completed", percentage: 20 },
        { stage: "Final Delivery Approved", percentage: 40 },
      ],
    },
  ];

  const handleMilestoneClick = (index: number) => {
    setSelectedMilestone(
      milestones[index].percentageBreakdown
        .map((p) => `${p.stage}: ${p.percentage}%`)
        .join(" - ")
    );
    setIsMilestoneDropdownOpen(false);
  };

  const handlePaymentAmountChange = (amount: string) => {
    setPaymentAmount(amount);
  };

  const handlePaymentPercentageChange = (index: number) => {
    const selectedMilestoneBreakdown = milestones[index].percentageBreakdown
      .map((p) => `${p.stage}: ${p.percentage}%`)
      .join(" - ");

    setPaymentPercentage(selectedMilestoneBreakdown);
    setIsPaymentPercentageDropdownOpen(false);
  };

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
          {/* Milestone Dropdown */}
          <div>
            <label
              htmlFor="type-of-milestone"
              className="block text-sm font-medium text-gray-700"
            >
              Milestone Payment Structure
            </label>
            <div className="relative mt-2">
              <button
                onClick={() =>
                  setIsMilestoneDropdownOpen(!isMilestoneDropdownOpen)
                }
                className="w-full border border-[#D9D9D9] rounded-md shadow-sm pl-4 pr-8 py-2 text-left focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm bg-white"
              >
                {selectedMilestone || "Select milestone structure"}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  ▼
                </span>
              </button>
              {isMilestoneDropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-[#D9D9D9]">
                  {milestones.map((milestone, index) => (
                    <li
                      key={index}
                      onClick={() => handleMilestoneClick(index)}
                      className={`cursor-pointer px-4 py-2 hover:bg-purple-50 text-[14px] font-[500] flex flex-col space-y-1 ${
                        selectedMilestone ===
                        milestone.percentageBreakdown
                          .map((p) => `${p.stage}: ${p.percentage}%`)
                          .join(" - ")
                          ? "bg-purple-100 font-medium text-purple-700"
                          : "text-gray-700"
                      }`}
                    >
                      <div className="text-xs text-gray-600">
                        {milestone.percentageBreakdown
                          .map((p) => `${p.stage}: ${p.percentage}%`)
                          .join(" - ")}
                      </div>
                    </li>
                  ))}
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
                value={paymentAmount}
                onChange={(e) => handlePaymentAmountChange(e.target.value)}
                className="w-full border border-[#D9D9D9] rounded-md shadow-sm pl-4 pr-4 py-2 focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
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
          </div>

          {/* Payment Percentage */}
          <div>
            <label
              htmlFor="payment-percentage"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Percentage
            </label>
            <div className="relative mt-2">
              <button
                onClick={() =>
                  setIsPaymentPercentageDropdownOpen(
                    !isPaymentPercentageDropdownOpen
                  )
                }
                className="w-full border border-[#D9D9D9] rounded-md shadow-sm pl-4 pr-8 py-2 text-left focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm bg-white"
              >
                {paymentPercentage || "Select milestone payment structure"}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  ▼
                </span>
              </button>
              {isPaymentPercentageDropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-[#D9D9D9]">
                  {milestones.map((milestone, index) => (
                    <li
                      key={index}
                      onClick={() => handlePaymentPercentageChange(index)}
                      className={`cursor-pointer px-4 py-2 hover:bg-purple-50 text-[14px] font-[500] flex flex-col space-y-1 ${
                        paymentPercentage ===
                        milestone.percentageBreakdown
                          .map((p) => `${p.stage}: ${p.percentage}%`)
                          .join(" - ")
                          ? "bg-purple-100 font-medium text-purple-700"
                          : "text-gray-700"
                      }`}
                    >
                      <div className="text-xs text-gray-600">
                        {milestone.percentageBreakdown
                          .map((p) => `${p.stage}: ${p.percentage}%`)
                          .join(" - ")}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
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
            onClick={onNext}
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
