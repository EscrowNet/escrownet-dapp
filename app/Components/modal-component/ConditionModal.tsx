"use client";
import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";


interface ModalProps {
  onNext?: () => void;
  onPrevious?: () => void;
}


const ConditionModal: React.FC<ModalProps> = ({ onNext, onPrevious }) => {
  const [selectedMilestone, setSelectedMilestone] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const milestones = [
    {
      title: "Manual approval by both parties.",
    },
    {
      title: "Automatic release upon milestone completion.",
    },
  ];

  const handleMilestoneClick = (title: string) => {
    setSelectedMilestone(title);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed inset-0 flex mb-16 items-center justify-center bg-black bg-opacity-50 z-50">
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

          <div className="-ml-5 w-20 h-px bg-[#2D0561]"></div>

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

        
          <div className="-ml-4 w-16 h-px bg-gray-300"></div>

          {/* Payment */}
          <div className="flex items-center">
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
         <div className="p-6 space-y-2">
          <div className="mb-6">
            {" "}
            <label
              htmlFor="release-condition"
              className="block text-sm font-[500] text-gray-700"
            >
              Release condition
            </label>
            <div className="relative mt-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full border border-[#D9D9D9] rounded-md shadow-sm pl-4 pr-8 py-2 text-left focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm bg-white"
              >
                {selectedMilestone || "Select release condition"}
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
                      <div className="flex w-full justify-between items-center">
                        <span className="font-medium">{milestone.title}</span>

                        
                        {selectedMilestone === milestone.title && (
                          <div className="flex">
                            <div className="w-6 h-6 flex items-center justify-center border-2 border-[#2D0561] rounded-full">
                              <div className="w-2 h-2 bg-[#2D0561] rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Custom condition */}
          <div className="mt-5">
            <label
              htmlFor="custom-condition"
              className="block text-sm font-[500] text-gray-700"
            >
              Custom condition
            </label>
            <textarea
              id="custom-condition"
              rows={3}
              className="mt-2 w-full border border-[#D9D9D9] rounded-md shadow-sm p-4 focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
              placeholder="Enter custom conditions"
            />
          </div>
          <p className="text-[12px] text-gray-500">
            You can set custom release conditions
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-center px-6 py-4 gap-[24px]">
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

export default ConditionModal;
