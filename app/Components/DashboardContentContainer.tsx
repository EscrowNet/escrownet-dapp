import React from "react";

interface Props {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardContentContainer({
  title,
  subTitle,
  children,
  className,
}: Props) {
  return (
    <div
      className={`${className} bg-white p-[1.6rem] rounded-md text-black  border-[#C4C4C4] border-[0.5px]`}
    >
      <div className="w-full flex items-center justify-between mb-2">
        <p className="font-semibold text-base">{title}</p>
        <p className="text-[#958f8f] text-base font-normal">{subTitle}</p>
      </div>
      <div className="w-full h-[0.5px] bg-[#C4C4C4] my-4" />
      {!subTitle && (
        <div className="w-full flex flex-col gap-y-5">{children}</div>
      )}
      {subTitle && children}
    </div>
  );
}
