import React from "react";
import icon from "@/app/images/cryptocurrency-color_usdt.png";
import icon1 from "@/app/images/image.png"
import Image from "next/image";

const DepositForm: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-10 mb-6 w-full max-w-md mx-auto mt-8">
        <div className="flex justify-center items-center gap-8 mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb">Deposit details</h3>
        <div className="flex items-center bg-gray-300 border border-gray-300 rounded-md p-2">
          <Image
            src={icon1}
            alt="USDT"
            className="w-5 h-5 mr-4"
          />
          <select
            className="text-gray-700 bg-gray-300 focus:outline-none flex-1"
          >
            <option value="usdt">0x1e13....39b2</option>
            <option value="eth">0x01g24....0d73</option>
          </select>
        </div>
        </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center border bg-gray-300 text-gray-700 border-gray-300 rounded-md px-3 py-2">
          <input
            type="text"
            placeholder="Starknet Address"
            className=" w-full border bg-gray-300 border-gray-300 rounded-md  text-gray-600 focus:outline-none"
          />
        </div>
        <div className="flex items-center bg-gray-300 border border-gray-300 rounded-md p-3">
          <Image
            src={icon}
            alt="USDT"
            className="w-5 h-5 mr-3"
          />
          <select
            className="text-gray-700 bg-gray-300 focus:outline-none flex-1"
          >
            <option value="usdt">USDT</option>
            <option value="eth">ETH</option>
          </select>
        </div>
      </div>

     <div className="mb-6 ">
  <div className=" flex items-center ">
    <input
      type="text"
      placeholder="Amount"
      className="flex-1  bg-gray-300 border-gray-300 rounded-l-md p-3 text-gray-600 focus:outline-none"
    />
    <button className="bg-gray-300 text-gray-600 px-4 py-3 w-full rounded-r-md hover:bg-gray-300">
      Max
    </button>
  </div>
</div>

      <button className="w-full bg-[#64537B] text-white py-2 rounded-md hover:bg-purple-700">
        Escrow Pay
      </button>
    </div>
  );
};

export default DepositForm;
