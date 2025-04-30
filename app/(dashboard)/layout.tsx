import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "../../components/dashboardHeader";

export const metadata: Metadata = {
  title: "Escrownet Dashboard | Manage Your Escrow Contracts",
  description: "Manage your escrow contracts, track payments, and handle transactions securely through the Escrownet dashboard.",
  keywords: ["escrow dashboard", "starknet wallet", "escrow management", "blockchain transactions", "smart contracts"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="md:ml-64 flex-1" id="dashboard-main-content" role="main" aria-label="Dashboard main content">
        <div className="min-h-screen w-full bg-gray-50">
          <Header />
          <div className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" tabIndex={-1}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
