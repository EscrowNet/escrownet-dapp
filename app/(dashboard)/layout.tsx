import type React from "react";
import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "../../components/dashboardHeader";
import { SidebarProvider } from "@/components/SidebarContext";

export const metadata: Metadata = {
  title: "Escrownet Dashboard | Manage Your Escrow Contracts",
  description:
    "Manage your escrow contracts, track payments, and handle transactions securely through the Escrownet dashboard.",
  keywords: [
    "escrow dashboard",
    "starknet wallet",
    "escrow management",
    "blockchain transactions",
    "smart contracts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <main
          className="lg:ml-64 flex-1 min-h-screen"
          id="dashboard-main-content"
          role="main"
          aria-label="Dashboard main content"
        >
          <div className="min-h-screen w-full bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            <DashboardHeader />
            <div
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primaryColor dark:focus-visible:ring-dark-accent dark:focus-visible:ring-offset-dark-bg"
              tabIndex={-1}
            >
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
