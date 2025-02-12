import React from "react";

export default function ContactSummary() {
  return (
    <div className="w-full">
      <h3 className="font-semibold text-base xl:text-lg leading-[30px]">
        Contact Summary
      </h3>
      <ul className="ml-4">
        <li className="font-normal list-inside list-disc text-sm xl:text-base leading-[30px]">
          Escrow Type: Goods and Services
        </li>
        <li className="font-normal list-inside list-disc text-sm xl:text-base leading-[30px]">
          Total Escrow Amount: $10,000
        </li>
        <li className="font-normal list-inside list-disc text-sm xl:text-base leading-[30px]">
          Parties Involved: 0x74949...794, Seller 0x84839...854
        </li>
      </ul>
    </div>
  );
}
