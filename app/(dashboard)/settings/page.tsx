"use client";
import DashboardContentContainer from "@/components/DashboardContentContainer";
import { ToggleSwitch } from "@/components/ToggleComponent";

const page = () => {
  return (
    <div className="p-6 w-full h-full">
      <DashboardContentContainer
        title="Settings"
        className="w-full mt-[1rem] pb-[3rem]"
      >
        <div className="p-[1.5rem] pb-[3rem] flex flex-col gap-[2rem]">
          <div className="flex justify-between items-center">
            <h2 className="text-[#131313] dark:text-dark-text-primary font-sans font-[600] text-[1rem] leading-[1.5625rem] opacity-60 dark:opacity-70">
              Transaction History export
            </h2>
            <button
              type="button"
              className="text-[#26A17B] dark:text-green-400 text-center font-sans text-base font-bold leading-[1.5625rem] hover:text-[#1e8a66] dark:hover:text-green-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#26A17B] dark:focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-dark-bg rounded px-2 py-1"
            >
              Download
            </button>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[#131313] dark:text-dark-text-primary font-sans font-[600] text-[1rem] leading-[1.5625rem] opacity-60 dark:opacity-70">
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
