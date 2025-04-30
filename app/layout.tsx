import type { Metadata } from "next";
import "./globals.css";
import { StarknetProvider } from "@/components/StarknetProvider";

export const metadata: Metadata = {
  title: "Escrownet | Secure Escrow Services on Starknet",
  description: "Escrownet provides secure and transparent escrow services on Starknet blockchain. Protect your transactions with smart contract-based escrow solutions.",
  keywords: ["escrow", "starknet", "blockchain", "smart contracts", "secure payments", "crypto escrow"],
  authors: [{ name: "Escrownet Team" }],
  openGraph: {
    title: "Escrownet | Secure Escrow Services on Starknet",
    description: "Secure and transparent escrow services on Starknet blockchain",
    url: "https://escrownet.com",
    siteName: "Escrownet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escrownet | Secure Escrow Services on Starknet",
    description: "Secure and transparent escrow services on Starknet blockchain",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#64537B" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen">
        <StarknetProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50 focus:text-black">
            Skip to main content
          </a>
          <div id="main-content">
            {children}
          </div>
        </StarknetProvider>
      </body>
    </html>
  );
}
