import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  from: string;
  date: string;
  amount: number;
  recieved: boolean;
}
export default function Transaction({
  image,
  from,
  date,
  amount,
  recieved,
}: Props) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <Image
          src={image ?? ""}
          alt={from}
          width={400}
          height={400}
          className="w-[2.5rem] h-[2.5rem] rounded-full"
        />

        <div>
          <p className="text-base font-semibold mb-3">
            {recieved ? "From" : "To"} {from}
          </p>
          <p className="text-sm text-[#958F8F] font-semibold">{date}</p>
        </div>
      </div>
      <div className="flex flex-col text-right gap-y-2">
        <p className="text-base text-[#2D0561] font-extrabold">
          {recieved ? "+" : "-"}
          {amount}
        </p>
        <p className="text-sm text-[#958F8F] font-semibold">
          {recieved ? "Amount Recieved" : "Amount Transfered"}
        </p>
      </div>
    </div>
  );
}
