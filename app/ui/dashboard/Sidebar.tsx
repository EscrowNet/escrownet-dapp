"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Dashboard from "@/public/icons/dashboard.svg";
import Clipboard from "@/public/icons/clipboard.svg";
import Wallet from "@/public/icons/wallet.svg";
import Setting from "@/public/icons/setting.svg";
import Help from "@/public/icons/help.svg";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: Dashboard },
  { name: "Escrows", href: "/escrows", icon: Clipboard },
  { name: "Payment", href: "/payment", icon: Wallet },
  { name: "Settings", href: "/settings", icon: Setting },
];

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col h-full gap-4 p-4">
      <p className="font-semibold text-midnight pl-4 mt-4">StarkEscrow</p>
      <div className="flex flex-col h-full">
        <nav className="flex flex-col gap-4 mt-8">
          {links.map(({ href, icon, name }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-4 p-4 text-black text-sm opacity-60 hover:text-midnight hover:opacity-100 ${
                isActive(href) ? "text-midnight opacity-100" : ""
              }`}
            >
              <Image src={icon} alt={`navigate to ${href}`} />
              <p>{name}</p>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col h-full justify-center">
          <Link
            href="/help"
            className={`flex items-center gap-4 p-4 text-black text-sm opacity-60 hover:text-midnight hover:opacity-100 ${
              isActive("/href") ? "text-midnight opacity-100" : ""
            }`}
          >
            <Image src={Help} alt={`navigate to /help`} />
            <p>Help</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
