import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-9 md:py-[35px] bg-[#F5F5F5] px-4 bg-hero-bg bg-contain bg-no-repeat bg-center text-center">
      <div className="max-w-[659px] mb-6">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-inter text-primaryColor font-bold mb-2 lg:mb-6 leading-tight lg:leading-[58px]">
          Secure Crypto Transactions Made Simple
        </h1>
        <p className="text-xs md:text-base font-bold text-[#64537B]">
          Integrate Escrow Directly Into Your dApps with Our StarkNet SDK
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-6 text-sm md:text-base text-white">
        <button className="bg-[#64537B]  px-4 py-3  md:py-[14px] w-[180px] text-center rounded">
          Download SDK
        </button>
        <button className="bg-[#2D0561] px-4 py-[14px] w-[180px] text-center rounded">
          Launch App
        </button>
      </div>

      <img
        src="/escrow-illus.svg"
        className="mt-6 md:mt-[56px] w-[250px] md:w-[470px]"
        alt=""
      />
    </section>
  );
};

export default Hero;
