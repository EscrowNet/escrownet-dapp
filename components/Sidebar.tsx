"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef, useCallback } from "react";
import { useSidebar } from "./SidebarContext";
import { X } from "lucide-react";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const Sidebar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { isOpen, closeSidebar } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const previousPathnameRef = useRef(pathname);

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close sidebar on ACTUAL route change for mobile (not initial mount)
  useEffect(() => {
    // Only close if pathname actually changed AND we're not on initial mount
    if (
      mounted &&
      pathname !== previousPathnameRef.current &&
      isOpen &&
      window.innerWidth < 1024
    ) {
      const timer = setTimeout(() => {
        closeSidebar();
      }, 100);

      // Update the previous pathname
      previousPathnameRef.current = pathname;

      return () => clearTimeout(timer);
    } else {
      // Just update the ref without closing
      previousPathnameRef.current = pathname;
    }
  }, [pathname, isOpen, closeSidebar, mounted]);

  // Handle clicks outside the sidebar to close it (for mobile)
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 1024
      ) {
        // Make sure we're not clicking the toggle button
        const toggleButton = document.querySelector(
          '[aria-label="Open sidebar"], [aria-label="Close sidebar"]'
        );
        if (toggleButton && !toggleButton.contains(event.target as Node)) {
          closeSidebar();
        }
      }
    },
    [isOpen, closeSidebar]
  );

  useEffect(() => {
    if (isOpen) {
      // Add a small delay to prevent immediate closing
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 200);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, handleClickOutside]);

  const menuItems: MenuItem[] = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.995 4.67993V8.55994C10.995 8.88121 10.9315 9.19931 10.8082 9.496C10.685 9.79269 10.5044 10.0621 10.2767 10.2888C10.0491 10.5155 9.779 10.695 9.48181 10.8171C9.18462 10.9391 8.86619 11.0013 8.54492 10.9999H4.68493C4.36454 11.0019 4.04702 10.9391 3.75146 10.8154C3.45591 10.6917 3.18843 10.5095 2.96496 10.2799C2.73853 10.0546 2.55914 9.78651 2.43725 9.49123C2.31537 9.19595 2.25333 8.87938 2.25488 8.55994V4.68994C2.25488 4.04454 2.51063 3.42543 2.96606 2.96812C3.42149 2.51082 4.03954 2.25258 4.68493 2.24994H8.55493C8.87499 2.25025 9.19182 2.31403 9.48706 2.43762C9.7823 2.56121 10.0501 2.74215 10.2749 2.96994C10.5028 3.19258 10.684 3.45855 10.8076 3.75221C10.9313 4.04588 10.995 4.3613 10.995 4.67993Z"
            fill="currentColor"
          />
          <path
            d="M21.7451 4.68994V8.55994C21.7399 9.20373 21.4825 9.81985 21.0282 10.276C20.5739 10.7322 19.9588 10.9921 19.3151 10.9999H15.4351C14.7882 10.996 14.1682 10.7415 13.7051 10.2899C13.4788 10.0624 13.2996 9.79251 13.1777 9.49565C13.0559 9.19879 12.9939 8.88082 12.9951 8.55994V4.68994C12.9937 4.36963 13.0567 4.05229 13.1804 3.75682C13.3041 3.46135 13.4859 3.19376 13.7151 2.96994C13.9399 2.74215 14.2077 2.56121 14.5029 2.43762C14.7982 2.31403 15.115 2.25025 15.4351 2.24994H19.305C19.9506 2.25517 20.5682 2.51391 21.0246 2.97037C21.4811 3.42683 21.7399 4.04443 21.7451 4.68994Z"
            fill="currentColor"
          />
          <path
            d="M21.7452 15.44V19.31C21.74 19.9537 21.4825 20.5699 21.0282 21.026C20.5739 21.4822 19.9589 21.7421 19.3151 21.75H15.4351C14.7842 21.7566 14.1563 21.509 13.6851 21.06C13.4579 20.8331 13.2782 20.5633 13.1563 20.2663C13.0344 19.9693 12.9728 19.651 12.9751 19.33V15.4599C12.9738 15.1396 13.0367 14.8223 13.1604 14.5268C13.2841 14.2314 13.466 13.9638 13.6951 13.7399C13.9199 13.5122 14.1877 13.3312 14.4829 13.2076C14.7782 13.0841 15.095 13.0203 15.4151 13.02H19.2851C19.9306 13.0252 20.5482 13.2839 21.0047 13.7404C21.4611 14.1968 21.7199 14.8144 21.7251 15.4599L21.7452 15.44Z"
            fill="currentColor"
          />
          <path
            d="M10.995 15.4499V19.3199C10.9871 19.9654 10.7258 20.582 10.2674 21.0366C9.80911 21.4912 9.19045 21.7474 8.54491 21.7499H4.68493C4.36544 21.7513 4.04883 21.6893 3.75341 21.5677C3.45799 21.446 3.18965 21.2671 2.96374 21.0412C2.73783 20.8152 2.5589 20.5468 2.43725 20.2514C2.3156 19.956 2.25355 19.6394 2.25487 19.3199V15.4499C2.25745 14.8044 2.51366 14.1857 2.96825 13.7274C3.42284 13.2691 4.03943 13.0078 4.68493 12.9999H8.55492C9.20334 13.0055 9.82399 13.2638 10.2849 13.7199C10.741 14.1801 10.9964 14.8021 10.995 15.4499Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Escrow",
      path: "/escrow",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7298 3.87519L15.7298 3.87519V3.88V4.82C15.7298 5.58386 15.1136 6.2 14.3498 6.2H9.63977C8.87591 6.2 8.25977 5.58386 8.25977 4.82V3.88C8.25977 3.11959 8.88245 2.5 9.64977 2.5H14.3498C15.1181 2.5 15.7371 3.11947 15.7298 3.87519Z"
            stroke="currentColor"
          />
          <path
            d="M14.35 8.20998C16.2162 8.20998 17.74 6.68612 17.74 4.81998C17.74 4.65344 17.9252 4.51919 18.1077 4.61275C19.3589 5.27943 20.21 6.60227 20.21 8.11998V17.53C20.21 19.7138 18.4239 21.5 16.24 21.5H7.76004C5.57618 21.5 3.79004 19.7138 3.79004 17.53V8.11998C3.79004 6.60226 4.64117 5.27942 5.89236 4.61274C6.0749 4.5192 6.26004 4.65345 6.26004 4.81998C6.26004 6.68612 7.7839 8.20998 9.65004 8.20998H14.35ZM11.6936 17.0835L15.6936 13.0835C16.1789 12.5983 16.1789 11.8017 15.6936 11.3164C15.2083 10.8312 14.4117 10.8312 13.9265 11.3164L10.81 14.4329L10.1936 13.8164C9.70833 13.3312 8.91175 13.3312 8.42649 13.8164C7.94122 14.3017 7.94122 15.0983 8.42649 15.5835L9.92649 17.0835C10.1752 17.3322 10.4946 17.45 10.81 17.45C11.1255 17.45 11.4449 17.3322 11.6936 17.0835Z"
            stroke="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Payment",
      path: "/payment",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.85 3.95005V7.75005H13.35V3.95005C13.35 3.68005 13.11 3.55005 12.95 3.55005C12.9 3.55005 12.85 3.56005 12.8 3.58005L4.87 6.57005C4.34 6.77005 4 7.27005 4 7.84005V8.51005C3.09 9.19005 2.5 10.28 2.5 11.51V7.84005C2.5 6.65005 3.23 5.59005 4.34 5.17005L12.28 2.17005C12.5 2.09005 12.73 2.05005 12.95 2.05005C13.95 2.05005 14.85 2.86005 14.85 3.95005Z"
            stroke="currentColor"
          />
          <path
            d="M21.5002 14.5V15.5C21.5002 15.77 21.2902 15.99 21.0102 16H19.5502C19.0202 16 18.5402 15.61 18.5002 15.09C18.4702 14.78 18.5902 14.49 18.7902 14.29C18.9702 14.1 19.2202 14 19.4902 14H21.0002C21.2902 14.01 21.5002 14.23 21.5002 14.5Z"
            fill="currentColor"
          />
          <path
            d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
            stroke="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Settings",
      path: "/settings",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.1 9.22006C18.29 9.22006 17.55 7.94006 18.45 6.37006C18.97 5.46006 18.66 4.30006 17.75 3.78006L16.02 2.79006C15.23 2.32006 14.21 2.60006 13.74 3.39006L13.63 3.58006C12.73 5.15006 11.25 5.15006 10.34 3.58006L10.23 3.39006C9.78 2.60006 8.76 2.32006 7.97 2.79006L6.24 3.78006C5.33 4.30006 5.02 5.47006 5.54 6.38006C6.45 7.94006 5.71 9.22006 3.9 9.22006C2.86 9.22006 2 10.0701 2 11.1201V12.8801C2 13.9201 2.85 14.7801 3.9 14.7801C5.71 14.7801 6.45 16.0601 5.54 17.6301C5.02 18.5401 5.33 19.7001 6.24 20.2201L7.97 21.2101C8.76 21.6801 9.78 21.4001 10.25 20.6101L10.36 20.4201C11.26 18.8501 12.74 18.8501 13.65 20.4201L13.76 20.6101C14.23 21.4001 15.25 21.6801 16.04 21.2101L17.77 20.2201C18.68 19.7001 18.99 18.5301 18.47 17.6301C17.56 16.0601 18.3 14.7801 20.11 14.7801C21.15 14.7801 22.01 13.9301 22.01 12.8801V11.1201C22 10.0801 21.15 9.22006 20.1 9.22006ZM12 15.2501C10.21 15.2501 8.75 13.7901 8.75 12.0001C8.75 10.2101 10.21 8.75006 12 8.75006C13.79 8.75006 15.25 10.2101 15.25 12.0001C15.25 13.7901 13.79 15.2501 12 15.2501Z"
            stroke="currentColor"
          />
        </svg>
      ),
    },
  ];

  const helpMenuItem: MenuItem = {
    title: "Help",
    path: "/help",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25V2.25ZM12.0001 18C11.7776 18 11.56 17.9341 11.375 17.8104C11.19 17.6868 11.0458 17.5111 10.9607 17.3056C10.8755 17.1 10.8533 16.8738 10.8967 16.6556C10.9401 16.4373 11.0472 16.2369 11.2046 16.0795C11.3619 15.9222 11.5624 15.8151 11.7806 15.7717C11.9988 15.7282 12.225 15.7505 12.4306 15.8357C12.6361 15.9208 12.8118 16.065 12.9355 16.25C13.0591 16.435 13.1251 16.6525 13.1251 16.875C13.1251 17.1734 13.0065 17.4596 12.7955 17.6705C12.5846 17.8815 12.2984 18 12.0001 18ZM12.75 13.4165V13.5005C12.75 13.6994 12.671 13.8901 12.5303 14.0308C12.3897 14.1714 12.1989 14.2505 12 14.2505C11.8011 14.2505 11.6103 14.1714 11.4697 14.0308C11.329 13.8901 11.25 13.6994 11.25 13.5005V12.7505C11.25 12.5515 11.329 12.3608 11.4697 12.2201C11.6103 12.0795 11.8011 12.0005 12 12.0005C12.3708 12.0005 12.7334 11.8905 13.0417 11.6845C13.35 11.4784 13.5904 11.1856 13.7323 10.843C13.8742 10.5004 13.9113 10.1234 13.839 9.75966C13.7666 9.39595 13.5881 9.06186 13.3258 8.79963C13.0636 8.53741 12.7295 8.35883 12.3658 8.28649C12.0021 8.21414 11.6251 8.25127 11.2825 8.39318C10.9399 8.5351 10.647 8.77542 10.441 9.08376C10.235 9.39211 10.125 9.75462 10.125 10.1255C10.125 10.3244 10.046 10.5151 9.90534 10.6558C9.76469 10.7964 9.57392 10.8755 9.37501 10.8755C9.1761 10.8755 8.98533 10.7964 8.84468 10.6558C8.70403 10.5151 8.62501 10.3244 8.62501 10.1255C8.62509 9.49014 8.80449 8.86774 9.14259 8.32985C9.48068 7.79196 9.96373 7.36042 10.5362 7.08487C11.1086 6.80931 11.7472 6.70093 12.3785 6.77219C13.0099 6.84344 13.6082 7.09145 14.1049 7.48767C14.6015 7.88389 14.9762 8.41225 15.1859 9.01196C15.3956 9.61168 15.4317 10.2584 15.2902 10.8778C15.1487 11.4971 14.8352 12.0639 14.3858 12.5131C13.9364 12.9622 13.3694 13.2753 12.75 13.4165Z"
          stroke="currentColor"
        />
      </svg>
    ),
  };

  const NavLink = ({
    item,
    isActive,
  }: {
    item: MenuItem;
    isActive: boolean;
  }) => (
    <Link
      href={item.path}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        isActive
          ? "text-purple-900 dark:text-dark-accent bg-purple-50 dark:bg-dark-accent/10"
          : "text-gray-600 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-card"
      }`}
      onClick={() => {
        if (window.innerWidth < 1024) {
          closeSidebar();
        }
      }}
    >
      <span
        className={`${
          isActive
            ? "text-purple-900 dark:text-dark-accent"
            : "text-gray-400 dark:text-dark-text-muted"
        }`}
      >
        {item.icon}
      </span>
      <span className="font-medium">{item.title}</span>
    </Link>
  );

  if (!mounted) return null;

  return (
    <>
      {/* Enhanced Overlay for mobile sidebar with modal-like feel */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-all duration-300 ease-in-out"
          onClick={() => {
            closeSidebar();
          }}
          style={{
            backdropFilter: "blur(4px)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - completely hidden on mobile when closed */}
      <div
        ref={sidebarRef}
        className={`h-screen bg-white dark:bg-dark-surface border-r border-gray-200 dark:border-dark-border flex flex-col transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "fixed left-0 top-0 w-64 shadow-2xl lg:shadow-none"
            : "fixed -left-full lg:left-0 top-0 w-64 lg:shadow-none"
        }`}
      >
        {/* Mobile Close Button - positioned smartly in top right */}
        {isOpen && (
          <div className="lg:hidden absolute top-4 right-4 z-50">
            <button
              onClick={closeSidebar}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-dark-border transition-colors shadow-md"
              aria-label="Close sidebar"
              type="button"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        )}

        <div className="p-4 flex-1 overflow-y-auto">
          {/* Logo section - with extra top padding to account for close button */}
          <div className="flex items-center space-x-2 mb-8 mt-12 lg:mt-10">
            <Image
              className="h-[21px] cursor-pointer dark:filter dark:brightness-110"
              src="/logo.svg"
              alt="Escrownet"
              width={180}
              height={38}
              priority
              onClick={() => router.push("/")}
            />
          </div>

          {/* Main navigation */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                item={item}
                isActive={pathname === item.path}
              />
            ))}
          </nav>

          {/* Spacer to push help to bottom */}
          <div className="h-[400px]"></div>

          {/* Help section at bottom */}
          <div>
            <NavLink
              item={helpMenuItem}
              isActive={pathname === helpMenuItem.path}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
