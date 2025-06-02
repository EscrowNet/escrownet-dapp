interface TransactionDetailsProps {
  details: {
    milestone: string;
    amountPaid: number;
    recipientWallet: string;
    status: "Released" | "Pending" | "Failed";
    description: string;
  };
}

export function TransactionDetails({ details }: TransactionDetailsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Released":
        return "text-[#26A17B] dark:text-green-400";
      case "Pending":
        return "text-yellow-600 dark:text-yellow-400";
      case "Failed":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-gray-900 dark:text-dark-text-primary";
    }
  };

  return (
    <div className="px-6 pb-6 text-sm font-sans">
      <h4 className="text-sm font-medium text-[#958F8F] dark:text-dark-text-muted mb-4">
        Description
      </h4>
      <ul className="space-y-2 list-disc pl-5 font-medium font-sans text-gray-900 dark:text-dark-text-primary">
        <li>
          <span className="font-semibold">Milestone:</span> {details.milestone}
        </li>
        <li>
          <span className="font-semibold">Amount Paid:</span> $
          {details.amountPaid.toLocaleString()}
        </li>
        <li>
          <span className="font-semibold">Recipient Wallet:</span>{" "}
          {details.recipientWallet}
        </li>
        <li>
          <span className="font-semibold">Status:</span>{" "}
          <span className={`${getStatusColor(details.status)} font-bold`}>
            {details.status}
          </span>
        </li>
        <li>
          <span className="font-semibold text-sm">Description:</span>{" "}
          {details.description}
        </li>
      </ul>
    </div>
  );
}
