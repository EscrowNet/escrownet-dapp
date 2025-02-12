import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Escrow",
  description: "Create an Escrow",
};

export default function EscrowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
