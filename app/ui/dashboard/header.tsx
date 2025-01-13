import Image from "next/image";
import { Button } from "./button";
import { Search } from "./search";
import Notification from "@/public/icons/notification.svg";

export function Header() {
  return (
    <header className="h-20 border-b-gray border-opacity-25 border-b">
      <div className="h-full flex items-center justify-end pr-8 gap-8">
        <Search placeholder="Search Escrows" />
        <div className="relative">
          <div className="absolute w-2 h-2 bg-midnight rounded-full top-0 right-0"></div>
          <Image src={Notification} alt="notification" />
        </div>
        <Button>0X874939093DWSH...</Button>
      </div>
    </header>
  );
}
