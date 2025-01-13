import Image from "next/image";

type LogoProps = {
  variant?: "default" | "white";
};

const variants = {
  default: "/images/logo.png",
  white: "/images/logo-white.png",
};

export function Logo({ variant = "default" }: LogoProps) {
  return (
    <Image src={variants[variant]} alt="StarkEscrow" width={100} height={100} />
  );
}
