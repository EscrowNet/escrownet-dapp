"use client";

import React, { useState } from "react";
import { GoDash } from "react-icons/go";
import DatePicker from "./ui/Datepicker";

interface ModalProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const MilestoneModal: React.FC<ModalProps> = ({ onNext }) => {
  const [selectedMilestone, setSelectedMilestone] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const milestones = [
    {
      title: "Goods Purchase",
      description:
        "Payment Held in Escrow, Goods Delivered, Buyer Confirms Receipt",
    },
    {
      title: "Freelance Service",
      description:
        "Initial Deposit Paid, First Draft Delivered, Revisions Completed, Final Delivery Approved",
    },
    {
      title: "Rental Agreement",
      description: "Deposit Paid, Keys Delivered, Remaining Rent Paid",
    },
    {
      title: "NFT Purchase",
      description:
        "Payment Held in Escrow, Goods Delivered, Buyer Confirms Receipt",
    },
  ];

  const handleMilestoneClick = (title: string) => {
    setSelectedMilestone(title);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed inset-0 mb-16 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
            <div className="w-6 h-6 flex items-center justify-center border-2 border-[#2D0561] rounded-full">
              <div className="w-2 h-2 bg-[#2D0561] rounded-full">
                <div className="mt-4 -ml-6">
                  <span className="text-[#958F8F] font-medium text-[12px]">
                    Milestone
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-16 h-px bg-gray-300"></div>

          {/* Condition */}
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full">
              <div className="mt-12">
                <span className="text-[#958F8F] font-medium text-[12px]">
                  Condition
                </span>
              </div>
            </div>
          </div>

          <div className="w-16 h-px bg-gray-300"></div>

          {/* Payment */}
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full">
              <div className="mt-12 ">
                <span className="text-[#958F8F] font-medium text-[12px]">
                  Payment
                </span>
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
          <div>
            <label
              htmlFor="contract-title"
              className="block text-sm font-medium text-gray-700"
            >
              Title of Contract
            </label>
            <input
              id="contract-title"
              type="text"
              className="mt-2 w-full border border-[#D9D9D9] rounded-md shadow-sm pl-4 pr-4 py-2 focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-[12px]"
            />
          </div>

          {/* Type of Milestone */}
          <div>
            <label
              htmlFor="milestone-type"
              className="block text-sm font-medium text-gray-700"
            >
              Type of Milestone
            </label>
            <div className="relative mt-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full border  border-[#D9D9D9] rounded-md shadow-sm pl-4 pr-8 py-4 text-left focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-[12px] bg-white"
              >
                {selectedMilestone}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  ▼
                </span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-[#D9D9D9]">
                  {milestones.map((milestone, index) => (
                    <li
                      key={index}
                      onClick={() => handleMilestoneClick(milestone.title)}
                      className={`cursor-pointer px-4 py-2 hover:bg-purple-50 text-[14px] font-[500] flex items-start space-x-2 ${
                        selectedMilestone === milestone.title
                          ? "bg-purple-100 font-medium text-purple-700"
                          : "text-gray-700"
                      }`}
                    >
                      {/* Title */}
                      <div className="flex items-center ">
                        <span className="font-[500] flex text-[14px] items-center">
                          {milestone.title} <GoDash />
                        </span>

                        <div className="flex gap-10">
                          {/* Description */}
                          <span className=" text-gray-500 text-[12px] flex-1">
                            {milestone.description}
                          </span>
                          {selectedMilestone === milestone.title && (
                            <div className="w-6 h-6 flex items-center justify-center border-2 border-[#2D0561] rounded-full">
                              <div className="w-2 h-2 bg-[#2D0561] rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p className="text-[12px] text-gray-500 mt-2">
              Set clear milestones and conditions to ensure a smooth transaction
              for both parties.
            </p>
          </div>

          {/* Date Range */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="from-date"
                className="block text-[14px] font-[500] text-gray-700"
              >
                From
              </label>
              <DatePicker onDateSelect={(date) => setStartDate(date)} />
            </div>
            <div className="flex-1">
              <label
                htmlFor="to-date"
                className="block text-[14px] font-[500] text-gray-700"
              >
                To
              </label>
              <DatePicker onDateSelect={(date) => setEndDate(date)} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center px-6 py-4 ">
          <button
            onClick={onNext}
            className="px-6 py-2 w-[442px] h-[52px] bg-[#2D0561] text-white rounded-[4px] hover:bg-[#2d0561ee] focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MilestoneModal;
