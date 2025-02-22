interface TransactionDetailsProps {
    details: {
      milestone: string
      amountPaid: number
      recipientWallet: string
      status: "Released" | "Pending" | "Failed"
      description: string
    }
  }
  
  export function TransactionDetails({ details }: TransactionDetailsProps) {
    return (
      <div className="px-6 pb-6 text-sm font-sans">
        <h4 className="text-sm font-medium text-[#958F8F] mb-4">Description</h4>
        <ul className="space-y-2 list-disc pl-5 font-medium font-sans">
          <li>
            <span className="font-semibold ">Milestone:</span> {details.milestone}
          </li>
          <li>
            <span className="font-semibold">Amount Paid:</span> ${details.amountPaid.toLocaleString()}
          </li>
          <li>
            <span className="font-semibold">Recipient Wallet:</span> {details.recipientWallet}
          </li>
          <li>
            <span className="font-semibold">Status:</span>{" "}
            <span className={details.status === "Released" ? "text-[#26A17B] font-bold " : "text-gray-900"}>
              {details.status}
            </span>
          </li>
          <li>
            <span className="font-semibold text-sm">Description:</span> {details.description}
          </li>
        </ul>
      </div>
    )
  }
  
  