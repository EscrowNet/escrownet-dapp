import React from "react";

export default function Pagination({
  prevLink,
  nextLink,
  current,
}: {
  prevLink?: string;
  nextLink?: string;
  current?: { text: string; action: any };
}) {
  return (
    <aside className="flex justify-center items-center gap-[29px] h-[52px] w-full">
      <button className="h-full px-[10px] pb-[10px] bg-[#2D0561] text-white w-[323px] max-w-full rounded-[4px]">
        Previous
      </button>
      {current && (
        <button className="h-full px-[10px] pb-[10px] bg-[#2D0561] text-white">
          Confirm & Sign
        </button>
      )}
      <button className="h-full w-[323px] max-w-full px-[10px] pb-[10px] bg-[#2D0561] text-white">
        Next
      </button>
    </aside>
  );
}
