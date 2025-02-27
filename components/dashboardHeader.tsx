"use client";
import Image from "next/image";
import NotificationIcon from "@/public/notification-bing.svg";
import { useEffect, useState } from "react";
import { NotificationItem } from "./Notification";
import { NotificationInterface } from "@/types/types";
import { notifications } from "@/data/mock-data";
import ClickOutsideWrapper from "./outsideClick";
import ConnectButton from "./ConnectButton";
import { useAccount } from "@starknet-react/core";
import AddressBar from "./AddressBar";

export default function dashboardHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const { address, account } = useAccount();
  console.log(account);
  const [allNotifications, setAllNotifications] = useState<
    NotificationInterface[] | null
  >(null);
  const [markAllAsRead, setMarkAllAsRead] = useState(false);

  useEffect(() => {
    setAllNotifications(notifications);
  }, []);
  return (
    <header className="flex justify-end items-center gap-4 p-4 bg-gray-100 relative">
      <input
        type="text"
        placeholder="Search Escrows"
        className="border border-gray-300 rounded-lg p-2 w-1/3 rounded-[4px] "
      />
      <div
        className="relative cursor-pointer bell"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        {!markAllAsRead && (
          <div className="absolute -top-[0.5rem] -right-[0.25rem] bg-primaryColor w-[1.25rem] h-[1.25rem] shrink-0 rounded-full">
            <p className="text-[0.75rem] text-[#ffffff] font-bold text-center">
              {allNotifications?.length}
            </p>
          </div>
        )}
        <Image
          src={NotificationIcon}
          alt="Notification Icon"
          width={24}
          height={24}
        />
      </div>
      {!address || !account ? (
        <ConnectButton />
      ) : (
        <AddressBar address={address} />
      )}
      {showNotifications && (
        <ClickOutsideWrapper
          onClickOutside={() => setShowNotifications(false)}
          className="absolute top-[100%] right-[1rem] pl-4 pr-4 pt-4 pb-2 rounded bg-white w-[30%] z-10 shadow-lg"
        >
          <div className="flex items-center justify-between pb-2  border-b-2 border-[#C4C4C4]">
            <p className="text-center font-sans text-[0.875rem] font-medium leading-[1.5625rem] text-[rgba(58,58,58,0.70)]">
              Notifications
            </p>
            <div className="flex gap-[0.625rem]">
              <button
                type="button"
                className="inline-flex h-[2.1875rem] p-[0.625rem] justify-center items-center gap-[0.625rem] shrink-0 rounded border border-[#D9D9D9]
              text-center font-sans text-[0.75rem] font-normal leading-[1.5625rem] text-[rgba(58,58,58,0.70)]
              "
                onClick={() => {
                  setMarkAllAsRead(true);
                  setShowNotifications(false);
                }}
              >
                Mark all as Read
              </button>
              <button
                type="button"
                className="inline-flex h-[2.1875rem] p-[0.625rem] justify-center items-center gap-[0.625rem] shrink-0 rounded border border-[#D9D9D9]
              text-center font-sans text-[0.75rem] font-normal leading-[1.5625rem] text-[rgba(58,58,58,0.70)]
              w-[2.3125rem] h-[2.1875rem] p-[0.625rem]
              "
                onClick={() => setShowNotifications(false)}
              >
                X
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] pt-2 pb-6 relative h-[50vh] overflow-y-auto">
            {allNotifications?.map((notification, index) => (
              <NotificationItem
                key={index}
                {...notification}
                id={notification.id ? notification.id : index}
              />
            ))}
          </div>
        </ClickOutsideWrapper>
      )}
    </header>
  );
}
