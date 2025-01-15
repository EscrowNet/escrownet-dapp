import React from "react";
import DepositForm from "./DepositForm";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 bg-gray-50">
        <div className="w-[659px] h-[167px]">
      <h1 className="text-5xl font-bold text-[#2D0561] mb-6 leading-[58px] ">
        Secure Crypto Transactions Made Simple
      </h1>
      <p className="text-md text-gray-600 mb-4">
        Integrate Escrow Directly Into Your dApps with Our StarkNet SDK
      </p>
        </div>

      <div className="flex space-x-4 mt-4">
        <button className="bg-[#64537B] text-white px-6 py-2 rounded-md hover:bg-gray-500">
          Download SDK
        </button>
        <button className="bg-[#2D0561] text-white px-6 py-2 rounded-md hover:bg-gray-300">
          Launch App
        </button>
      </div>
      <DepositForm/>
    </section>
  );
};

export default Hero;
