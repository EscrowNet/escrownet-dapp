"use client";

import { useState } from "react";
import { CompanyHeader } from "./company-header";
import { TransactionDetails } from "./transaction-details";

interface TransactionModalProps {
  transaction: {
    company: {
      name: string;
      location: string;
      logo: string;
    };
    amount: number;
    milestone: string;
    details: {
      milestone: string;
      amountPaid: number;
      recipientWallet: string;
      status: "Released" | "Pending" | "Failed";
      description: string;
    };
  };
}

export function TransactionModal({ transaction }: TransactionModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-2 px-6 py-2 bg-[#2D0561] dark:bg-dark-accent text-white dark:text-dark-bg font-medium rounded transition-colors duration-200 hover:bg-opacity-90 dark:hover:bg-dark-accent/90 focus:outline-none focus:ring-2 focus:ring-primaryColor dark:focus:ring-dark-accent focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
      >
        View Transaction Details
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="relative w-full max-w-[530px] mx-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-200 dark:hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
            >
              Close
            </button>
            <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-lg dark:shadow-dark-border/20 font-sans border border-transparent dark:border-dark-border">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-dark-border">
                <h2 className="text-xl font-medium text-gray-700 dark:text-dark-text-primary text-center">
                  Transaction
                </h2>
              </div>
              <div className="p-6">
                <div className="bg-[#F8F7FF] dark:bg-dark-card rounded-2xl border border-transparent dark:border-dark-border">
                  <CompanyHeader
                    name={transaction.company.name}
                    location={transaction.company.location}
                    logo={transaction.company.logo}
                    amount={transaction.amount}
                    milestone={transaction.milestone}
                  />
                  <TransactionDetails details={transaction.details} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
