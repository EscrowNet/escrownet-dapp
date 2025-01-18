import Image from "next/image";
import NotificationIcon from "@/public/notification-bing.svg";
export default function dashboardHeader() {
    return (
      <header className="flex justify-end items-center gap-4 p-4 bg-gray-100">
        <input
          type="text"
          placeholder="Search Escrows"
          className="border border-gray-300 rounded-lg p-2 w-1/3 rounded-[4px] "
        />
        <Image
          src={NotificationIcon}
          alt="Notification Icon"
          width={24}
          height={24}
        />
        <div className="bg-[#2D0561] text-[#ffffff] font-bold py-2 px-4 rounded-[4px] ">
          0xB7A93...XMASH
        </div>
      </header>
    );
  }
  