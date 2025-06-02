"use client";

import type React from "react";

import type { NotificationInterface } from "@/types/types";
import { BellIcon } from "../public/svg/BellIcon";
import { WalletIcon } from "../public/svg/Wallet";
import { useRouter } from "next/navigation";

export const NotificationItem: React.FC<NotificationInterface> = ({
  title,
  message,
  type,
  id,
}) => {
  const router = useRouter();
  return (
    <div className="flex gap-[0.5rem] rounded-[0.5rem] bg-[#F7F5F9] dark:bg-[#241832] w-full pt-[0.5rem] pr-[1rem] pl-[1rem] pb-[0.88rem] transition-colors duration-200">
      <div className="rounded-[1.25rem] bg-[rgba(217,217,217,0.60)] dark:bg-[#3D2B4F] p-[0.4375rem_0.5rem] h-fit transition-colors duration-200">
        {type === "action" ? <BellIcon /> : <WalletIcon />}
      </div>
      <div className="text w-full">
        <div className="flex justify-end w-full">
          <small className="font-inter text-[0.65rem] text-[#000] dark:text-[#8B7A9E] text-right transition-colors duration-200">
            5 minutes ago
          </small>
        </div>
        <h4 className="text-[#000] dark:text-[#E8E3F0] text-[0.75rem] font-[500] font-inter transition-colors duration-200">
          {title}
        </h4>
        {type === "action" && (
          <div className="flex items-center gap-[0.45rem] mt-[0.25rem]">
            <div className="w-[0.375rem] h-[0.375rem] bg-primaryColor dark:bg-[#9D7BEA] border-2 border-[#1A1F26] dark:border-[#0F0A1A] transition-colors duration-200"></div>
            <p className="text-primaryColor dark:text-[#9D7BEA] text-[0.625rem] font-[600] font-inter transition-colors duration-200">
              Action Required
            </p>
          </div>
        )}
        <p className="text-[#000] dark:text-[#B8A8CC] text-[0.625rem] font-[400] font-sans leading-[1.25rem] mt-[0.5rem] transition-colors duration-200">
          {message}
        </p>

        {type === "action" && (
          <button
            className="btn bg-primaryColor dark:bg-[#9D7BEA] hover:bg-purple-700 dark:hover:bg-[#8B6FBF] font-sans font-[500] text-white dark:text-[#0F0A1A] text-[0.65rem] leading-[1.01rem] w-[7.32425rem] h-[2.11588rem] mt-[0.5rem] transition-colors duration-200 rounded"
            onClick={() => router.push(`/escrow/${id}`)}
          >
            Review and Sign
          </button>
        )}
      </div>
    </div>
  );
};
