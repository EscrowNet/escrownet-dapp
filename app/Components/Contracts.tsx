import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  location: string;
  amount: number;
  client: string;
  period: string;
}
export default function Contract({
  image,
  title,
  location,
  amount,
  client,
  period,
}: Props) {
  return (
    <div className="w-full bg-[#2D05610A] p-[1.6rem] rounded-xl">
      <div className="w-full flex items-center justify-between mb-2">
        <div className="flex items-center gap-x-3">
          <Image
            src={image ?? ""}
            alt={title}
            width={400}
            height={400}
            className="w-[3.75rem] h-[3.75rem] rounded-full"
          />

          <div>
            <p className="text-base font-semibold mb-3">{title}</p>
            <p className="text-sm text-[#958F8F] font-semibold">{location}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-3">
          <p className="text-base text-[#2D0561] font-extrabold">${amount}</p>
          <p className="text-sm text-[#958F8F] font-semibold">Fixed rate</p>
        </div>
      </div>

      <div className="w-full h-[0.5px] bg-[#C4C4C4] my-4" />

      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-sm text-[#958F8F] font-semibold mb-3">
            Contract Period
          </p>
          <p className="text-sm text-[#121212] font-bold">{period}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#958F8F] font-semibold mb-3">
            Name of client
          </p>
          <p className="text-sm text-[#121212] font-bold">{client}</p>
        </div>
      </div>
    </div>
  );
}
