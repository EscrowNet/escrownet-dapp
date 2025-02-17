import { NotificationInterface } from "@/types/types";
import { BellIcon } from "../public/svg/BellIcon";
import { WalletIcon } from "../public/svg/Wallet";
import { useRouter } from "next/navigation";

export const NotificationItem: React.FC<NotificationInterface> = ({
  title,
  message,
  type,
  id
}) => {
  const router = useRouter();
  return (
    <div className="flex gap-[0.5rem] rounded-[0.5rem] bg-[#F7F5F9] w-full pt-[0.5rem] pr-[1rem] pl-[1rem] pb-[0.88rem]
    ">
      <div className="rounded-[1.25rem] bg-[rgba(217,217,217,0.60)] p-[0.4375rem_0.5rem] h-fit">
        {type === "action" ? <BellIcon /> : <WalletIcon />}
      </div>
      <div className="text w-full">
        <div className="flex justify-end w-full">
          <small className="font-inter text-[0.65rem] text-[#000] text-right">
            5 minutes ago
          </small>
        </div>
        <h4 className="text-[#000] text-[0.75rem] font-[500] font-inter">
          {title}
        </h4>
        {type === "action" && (
          <div className="flex items-center gap-[0.45rem] mt-[0.25rem]">
            <div className="w-[0.375rem] h-[0.375rem] bg-primaryColor border-2 border-[#1A1F26]"></div>
            <p className="text-primaryColor text-[0.625rem] font-[600] font-inter">
              Action Required
            </p>
          </div>
        )}
        <p className="text-[#000] text-[0.625rem] font-[400] font-sans leading-[1.25rem] mt-[0.5rem]">
          {message}
        </p>

        {type === "action" && (
          <button className="btn bg-primaryColor font-sans font-[500] text-white text-[0.65rem] leading-[1.01rem] w-[7.32425rem] h-[2.11588rem] mt-[0.5rem]"
          onClick={() => router.push(`/escrow/${id}`)}
          >
            Review and Sign
          </button>
        )}
      </div>
    </div>
  );
};
