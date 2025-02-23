import { TransactionModal } from "@/components/create-transaction-modal/transaction-modal";
import React from "react";
import PaymentList from "@/components/PaymentList";
import { payments } from "@/data/mock-data"
// import mstone from "../../../public/";

const page = () => {
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
  return (
    <div>
      <PaymentList payments={payments} />
      <TransactionModal transaction={transactionData}/>
    </div>
  );
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