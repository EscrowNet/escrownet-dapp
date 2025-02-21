"use client";
import DashboardContentContainer from "@/components/DashboardContentContainer";
import { ToggleSwitch } from "@/components/ToggleComponent";
import React from "react";

const page = () => {
  return (
    <div className="p-6 w-full h-full">
      <DashboardContentContainer
        title="Settings"
        className="w-full mt-[1rem] pb-[3rem]"
      >
        <div className="p-[1.5rem] pb-[3rem] flex flex-col gap-[2rem]">
          <div className="flex justify-between items-center">
            <h2 className="text-[#131313] font-sans font-[600] text-[1rem] leading-[1.5625rem] opacity-60">
              Transaction History export
            </h2>
            <button
              type="button"
              className="text-[#26A17B] text-center font-sans text-base font-bold leading-[1.5625rem]"
            >
              Download
            </button>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[#131313] font-sans font-[600] text-[1rem] leading-[1.5625rem] opacity-60">
              Escrow status update
            </h2>
            <ToggleSwitch activeStateAction={() => {}} />
          </div>
        </div>
      </DashboardContentContainer>
    </div>
  );
};

export default page;
