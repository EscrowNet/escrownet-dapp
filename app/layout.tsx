import type { Metadata } from "next";
import "./globals.css";
import { StarknetProvider } from "@/components/StarknetProvider";

export const metadata: Metadata = {
  title: "Escrownet",
  description: "Escrownet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StarknetProvider>{children}</StarknetProvider>
      </body>
    </html>
  );
}
