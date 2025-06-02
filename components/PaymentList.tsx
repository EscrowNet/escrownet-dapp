"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { PaymentsInterface } from "../types/types";

export default function PaymentList({
  payments,
}: {
  payments: PaymentsInterface[];
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Sample simulation for loading state to be dismissed after 2 seconds.
  // This will be replaced eventually by dependence on the backend
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="p-10">
      <div className="w-full p-6 bg-white dark:bg-dark-surface rounded-xl border border-transparent dark:border-dark-border">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-dark-text-primary">
          Transaction
        </h2>

        {/* Check loading states, after load, it checks if transaction object is empty and displays empty state or transaction list */}
        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="px-4 py-1.5 text-md font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-dark-accent/20 dark:text-dark-accent">
              Loading...
            </div>
          </div>
        ) : payments.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-500 dark:text-dark-text-muted">
              No transactions found
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {payments.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-[#2D05610A] dark:bg-dark-card rounded-lg border border-transparent dark:border-dark-border hover:bg-[#2D05611A] dark:hover:bg-dark-card/80 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={transaction.company.logo || "/placeholder.svg"}
                    alt={transaction.company.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-dark-text-primary">
                      {transaction.company.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-dark-text-muted">
                      {transaction.company.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-purple-700 dark:text-dark-accent">
                    ${transaction.amount}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-dark-text-muted">
                    {transaction.milestone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
