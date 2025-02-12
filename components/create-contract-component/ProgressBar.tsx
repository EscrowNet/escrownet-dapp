import Image from "next/image";
import React from "react";
import active from "@/app/images/active.svg";
import completed from "@/app/images/completed.svg";
import pending from "@/app/images/pending.svg";
export default function ProgressBar({
  items,
}: {
  items: {
    name: string;
    status: "completed" | "active" | "pending";
  }[];
}) {
  const progressEls = items.map((item, i) => {
    return (
      <>
        <div
          key={item.name}
          className="size-8 relative text-sm lg:text-base leading-[16.39px] text-[#958F8F] text-center"
        >
          <Image
            className={`size-8`}
            alt={item.name}
            src={
              item.status === "completed"
                ? completed
                : item.status === "active"
                ? active
                : pending
            }
            width={32}
            height={32}
          />
          <span className="inline-block absolute -bottom-8 -translate-x-1/2">
            {item.name}
          </span>
        </div>
        {item.status !== "pending" && i !== items.length - 1 && (
          <div
            className={`${
              item.status === "completed" ? "bg-[#2D0561]" : "bg-[#D1D5DB]"
            } h-[2px] w-20 max-w-full`}
          ></div>
        )}
      </>
    );
  });
  return <div className="flex items-center max-w-full">{progressEls}</div>;
}
