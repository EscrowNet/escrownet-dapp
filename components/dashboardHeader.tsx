"use client";

import type React from "react";

import Image from "next/image";
import NotificationIcon from "@/public/notification-bing.svg";
import { useEffect, useState, useRef } from "react";
import { NotificationItem } from "./Notification";
import type { NotificationInterface } from "@/types/types";
import { notifications } from "@/data/mock-data";
import ClickOutsideWrapper from "./outsideClick";
import ConnectButton from "./ConnectButton";
import { useAccount } from "@starknet-react/core";
import AddressBar from "./AddressBar";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, Search } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { useCallback } from "react";

export default function DashboardHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { isOpen, toggleSidebar } = useSidebar();
  const { address, account } = useAccount();
  const [allNotifications, setAllNotifications] = useState<
    NotificationInterface[] | null
  >(null);
  const [markAllAsRead, setMarkAllAsRead] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    setAllNotifications(notifications);
  }, []);

  // Handle menu button click with proper event handling
  const handleToggleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();

      // Add a small delay to prevent rapid toggling
      setTimeout(() => {
        toggleSidebar();
      }, 10);
    },
    [toggleSidebar]
  );

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <header className="flex justify-between items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border relative transition-colors duration-300 z-20">
        <div className="h-10 w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
      </header>
    );
  }

  return (
    <>
      <header className="bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border relative transition-colors duration-300 z-20">
        {/* Main header row */}
        <div className="flex justify-between items-center gap-2 p-3 sm:p-4">
          {/* Left side - Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              ref={toggleButtonRef}
              onClick={handleToggleClick}
              className="p-2 rounded-md text-gray-600 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-card transition-colors focus:outline-none focus:ring-2 focus:ring-primaryColor dark:focus:ring-dark-accent"
              aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
              type="button"
            >
              {isOpen ? (
                <X className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={2} />
              )}
            </button>
          </div>

          {/* Center - Search bar (hidden on mobile, shown in second row) */}
          <div className="hidden md:flex flex-1 justify-center max-w-md mx-4">
            <input
              type="text"
              placeholder="Search Escrows"
              className="w-full border border-gray-300 dark:border-dark-border rounded-lg p-2 bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text-primary placeholder-gray-500 dark:placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primaryColor dark:focus:ring-dark-accent transition-colors duration-200"
            />
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile search toggle */}
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
              aria-label="Toggle search"
              type="button"
            >
              <Search className="h-5 w-5" />
            </button>

            <ThemeToggle />

            {/* Notification bell */}
            <div
              className="relative cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primaryColor dark:focus:ring-dark-accent focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
              onClick={() => setShowNotifications(!showNotifications)}
              role="button"
              tabIndex={0}
              aria-label={`Notifications ${
                allNotifications?.length
                  ? `(${allNotifications.length} unread)`
                  : ""
              }`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setShowNotifications(!showNotifications);
                }
              }}
            >
              {!markAllAsRead &&
                allNotifications &&
                allNotifications.length > 0 && (
                  <div className="absolute -top-0.5 -right-0.5 bg-gradient-to-br from-primaryColor to-purple-700 dark:from-dark-accent dark:to-purple-400 w-5 h-5 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white dark:ring-dark-surface animate-pulse">
                    <span className="text-xs text-white dark:text-dark-bg font-bold leading-none">
                      {allNotifications.length > 99
                        ? "99+"
                        : allNotifications.length}
                    </span>
                  </div>
                )}
              <Image
                src={NotificationIcon || "/placeholder.svg"}
                alt="Notification Icon"
                width={24}
                height={24}
                className="dark:filter dark:brightness-0 dark:invert transition-transform duration-200 hover:scale-110"
              />
            </div>

            {/* Connect button or address bar */}
            <div className="hidden sm:block">
              {!address || !account ? (
                <ConnectButton />
              ) : (
                <AddressBar address={address} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile search row - toggleable */}
        {showMobileSearch && (
          <div className="md:hidden px-3 pb-3 pt-2 border-t border-gray-100 dark:border-dark-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search Escrows"
                className="flex-1 border border-gray-300 dark:border-dark-border rounded-lg p-2 mt-1 bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text-primary placeholder-gray-500 dark:placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primaryColor dark:focus:ring-dark-accent transition-colors duration-200"
                autoFocus
              />
              <button
                onClick={() => setShowMobileSearch(false)}
                className="p-2 mt-1 text-gray-500 dark:text-dark-text-muted hover:text-gray-700 dark:hover:text-dark-text-primary"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile connect button row */}
        <div className="sm:hidden px-3 pb-3 pt-2 border-t border-gray-100 dark:border-dark-border">
          {!address || !account ? (
            <ConnectButton />
          ) : (
            <AddressBar address={address} />
          )}
        </div>
      </header>

      {/* Notifications dropdown */}
      {showNotifications && (
        <ClickOutsideWrapper
          onClickOutside={() => setShowNotifications(false)}
          className="absolute top-full right-0 sm:right-4 mt-1 pl-4 pr-4 pt-4 pb-2 rounded-lg bg-white dark:bg-dark-surface w-full sm:w-80 md:w-96 z-50 shadow-xl dark:shadow-dark-border/20 border dark:border-dark-border"
        >
          <div className="flex items-center justify-between pb-2 border-b-2 border-gray-200 dark:border-dark-border">
            <h3 className="font-sans text-sm font-medium text-gray-700 dark:text-dark-text-secondary">
              Notifications
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                className="px-3 py-1.5 text-xs border border-gray-300 dark:border-dark-border rounded text-gray-600 dark:text-dark-text-secondary bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-border transition-colors duration-200"
                onClick={() => {
                  setMarkAllAsRead(true);
                  setShowNotifications(false);
                }}
              >
                Mark all as Read
              </button>
              <button
                type="button"
                className="px-2 py-1.5 text-xs border border-gray-300 dark:border-dark-border rounded text-gray-600 dark:text-dark-text-secondary bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-border transition-colors duration-200"
                onClick={() => setShowNotifications(false)}
              >
                ✕
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-3 pb-2 max-h-96 overflow-y-auto">
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
    </>
  );
}
