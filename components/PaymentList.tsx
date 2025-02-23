'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import {
    PaymentsInterface
  } from "../types/types";

export default function PaymentList({ payments }: { payments: PaymentsInterface[] }) {
  const [isLoading, setIsLoading] = useState(true)
  
  // Sample simulation for loading state to be dismissed after 2 seconds.
  // This will be replaced eventually by dependence on the backend
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="p-10">
      <div className="w-full p-6 bg-white rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Transaction</h2>

        {/* Check loading states, after load, it checks if transaction object is empty and displays empty state or transaction list */}
        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="px-4 py-1.5 text-md font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
              Loading...
            </div>
          </div>
        ) : payments.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-500">No transactions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {payments.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-[#2D05610A] rounded-lg">
                <div className="flex items-center gap-3">
                  <Image src={transaction.company.logo} alt={transaction.company.name} width={40} height={40} />
                  <div>
                    <h3 className="font-medium text-slate-900">{transaction.company.name}</h3>
                    <p className="text-sm text-slate-500">{transaction.company.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-purple-700">${transaction.amount}</p>
                  <p className="text-sm text-slate-500">{transaction.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}