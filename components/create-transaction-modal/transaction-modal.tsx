"use client"

import { useState } from "react"
import { CompanyHeader } from "./company-header"
import { TransactionDetails } from "./transaction-details"


interface TransactionModalProps {
  transaction: {
    company: {
      name: string
      location: string
      logo: string
    }
    amount: number
    milestone: string
    details: {
      milestone: string
      amountPaid: number
      recipientWallet: string
      status: "Released" | "Pending" | "Failed"
      description: string
    }
  }
}

export function TransactionModal({ transaction }: TransactionModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* <Button onClick={() => setIsOpen(true)}>View Transaction Details</Button> */}
      <button onClick={() => setIsOpen(true)}  className=" mt-2 px-6 py-2 bg-[#2D0561] text-white font-medium rounded transition"
            >
      View Transaction Details
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-[530px] mx-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-200"
            >
              Close
            </button>
            <div className="bg-white rounded-3xl shadow-lg font-sans">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-medium text-gray-700 text-center">Transaction</h2>
              </div>
              <div className="p-6">
                <div className="bg-[#F8F7FF] rounded-2xl">
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
  )
}


