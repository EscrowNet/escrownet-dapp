'use client'
import { TransactionModal } from "@/components/create-transaction-modal/transaction-modal";
import React from "react";
import Image from "next/image";
// import mstone from "../../../public/";
import { useState, useEffect } from "react"

const page = () => {
  const [isLoading, setIsLoading] = useState(true)

  // Sample simulation for loading state to be dismissed after 2 seconds.
  // This will be replaced eventually by dependence on the backend
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds delay

    return () => clearTimeout(timer)
  }, [])

  const transactionData = {
    company: {
      name: "Mstone.com",
      location: "Canada",
      logo: "/mstone.png",
    },
    amount: 700,
    milestone: "1st Milestone",
    details: {
      milestone: "First Milestone Completed",
      amountPaid: 700,
      recipientWallet: "[User's Wallet Address]",
      status: "Released" as const,
      description:
        "The first milestone has been successfully completed, and $700 has been released to the recipient's wallet. The funds are now available for use.",
    },
  }


  // Transaction interface types
  // interface Transaction {
  //   id: number
  //   company: string
  //   logo: string
  //   location: string
  //   amount: number
  //   status: string
  // }

export default function Page() {
  
  

  // Mock transaction data for test
  const transactions: Transaction[] = [
    {
      id: 1,
      company: "Mstone.com",
      logo: "/mstone.png",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 2,
      company: "Jastone.ng",
      logo: "/jastone.png",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 3,
      company: "Mstone.com",
      logo: "/mstone.png",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 4,
      company: "Jastone.ng",
      logo: "/jastone.png",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 5,
      company: "Mstone.com",
      logo: "/mstone.png",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 6,
      company: "Jastone.ng",
      logo: "/jastone.png",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
  ]

  
};

export default page;

// import { TransactionModal } from "@/components/transaction-modal"

// export default function Page() {
//   const transactionData = {
//     company: {
//       name: "Mstone.com",
//       location: "Canada",
//       logo: "/images/mstone-logo.png", // Update this path to match your image folder structure
//     },
//     amount: 700,
//     milestone: "1st Milestone",
//     details: {
//       milestone: "First Milestone Completed",
//       amountPaid: 700,
//       recipientWallet: "[User's Wallet Address]",
//       status: "Released" as const,
//       description:
//         "The first milestone has been successfully completed, and $700 has been released to the recipient's wallet. The funds are now available for use.",
//     },
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <h3 className="text-xl font-semibold mb-4">Hi, This is the payment page</h3>
//       <TransactionModal transaction={transactionData} />
//     </div>
//   )
// }


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
        ) : transactions.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-500">No transactions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-[#2D05610A] rounded-lg">
                <div className="flex items-center gap-3">
                  <Image src={transaction.logo} alt={transaction.company} width={40} height={40} />
                  <div>
                    <h3 className="font-medium text-slate-900">{transaction.company}</h3>
                    <p className="text-sm text-slate-500">{transaction.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-purple-700">${transaction.amount}</p>
                  <p className="text-sm text-slate-500">{transaction.status}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}