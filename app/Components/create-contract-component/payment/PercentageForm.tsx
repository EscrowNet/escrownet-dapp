import Image from "next/image";
import dollar from "@/app/images/dollar.svg";

export default function PercentageForm() {
  return (
    <form action="" className="text-black flex flex-col gap-5 ">
      <div>
        <label
          htmlFor="mileston"
          className="h-[35px] font-medium text-[#172E31] text-sm xl:text-base inline-block"
        >
          Type of Milestone
        </label>
        <select
          name="milestone"
          id="milestone"
          className="border-[0.5px] bg-transparent h-[42px] rounded-[4px] w-full border-[#D9D9D9]"
        ></select>
      </div>
      <div>
        <label
          htmlFor="amount"
          className="h-[35px] font-medium text-[#172E31] text-sm xl:text-base inline-block"
        >
          Payment Amount
        </label>
        <div className="flex justify-center border-[0.5px] h-[42px] rounded-[4px] gap-3 w-full border-[#D9D9D9]">
          <input
            type="number"
            className="w-full bg-transparent outline-none placeholder:text-xs placeholder:xl:text-xs p-2"
            placeholder="Payment is n Usdc"
            id="amount"
            name="amount"
          />
          <Image
            src={dollar}
            width={20}
            height={20}
            alt="Dollar sign"
            className="mr-2"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="percentage"
          className="h-[35px] font-medium text-[#172E31] text-sm xl:text-base inline-block"
        >
          Payment Percentage
        </label>
        <select
          name="percentage"
          id="percentage"
          className="border-[0.5px] bg-transparent h-[42px] rounded-[4px] w-full border-[#D9D9D9]"
        >
          <option value="">
            Initial Deposit Paid 50% - First Draft Delivered: 25% - Revisions
            Completed: 15% - Final Delivery Approved: 10%
          </option>
          <option value="">
            Initial Deposit Paid: 25% - First Draft Delivered: 25% - Revisions
            Completed: 25% Final Delivery Approved: 25%
          </option>
          <option value="">
            Initial Deposit Paid: 20% - First Draft Delivered: 20% - Revisions
            Completed: 20% - Final Delivery Approved: 40%
          </option>
        </select>
      </div>
      <div>
        <label
          htmlFor="address"
          className="h-[35px] font-medium text-[#172E31] text-sm xl:text-base inline-block"
        >
          Contractee Address/ID
        </label>
        <div className="flex justify-center border-[0.5px] h-[42px] rounded-[4px] w-full border-[#D9D9D9]">
          <input
            type="text"
            className="w-full bg-transparent placeholder:text-xs placeholder:xl:text-xs p-2"
            name="address"
            id="address"
          />
        </div>
      </div>
    </form>
  );
}
