import React from "react";
import DepositForm from "./DepositForm";

const Hero: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center text-center py-8 md:py-12 lg:py-16 bg-[#F5F5F5] bg-hero-bg bg-contain bg-no-repeat bg-center"
    >
      <div className="w-full px-4 sm:px-6 md:max-w-2xl lg:max-w-[659px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D0561] mb-4 lg:mb-6 leading-tight lg:leading-[58px]">
          Secure Crypto Transactions Made Simple
        </h1>
        <p className="text-sm md:text-md text-gray-600 mb-4 px-2">
          Integrate Escrow Directly Into Your dApps with Our StarkNet SDK
        </p>
      </div>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
        <button className="bg-[#64537B] text-white px-4 md:px-6 py-2 rounded-md hover:bg-gray-500">
          Download SDK
        </button>
        <button className="bg-[#2D0561] text-white px-4 md:px-6 py-2 rounded-md hover:bg-gray-300">
          Launch App
        </button>
      </div>

      <div className="w-full mt-6">
        <DepositForm />
      </div>
    </section>
  );
};

export default Hero;