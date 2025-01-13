import Link from "next/link";
import { Logo } from "@/app/ui/landing/Logo";
import { Button } from "@/app/ui/landing/button";

export function Header() {
  return (
    <header className="h-24 flex items-center bg-gray-light justify-between px-24">
      <div className="flex items-center gap-4">
        <Logo />
        <nav className="flex items-center gap-4 text-purple text-sm">
          <Link href="/">Escrow</Link>
          <Link href="/">Explore</Link>
          <Link href="/">API</Link>
        </nav>
      </div>
      <Button className="md:w-40 md:visible invisible">Launch App</Button>
    </header>
  );
}
