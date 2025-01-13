import Image from "next/image";

type Transaction = {
  id: number;
  name: string;
  currency: string;
  icon: any;
  amount: number;
};

export function TransactionList({ data }: { data: Transaction[] }) {
  return (
    <div className="flex flex-col gap-4 pb-8">
      {data.map((transaction) => (
        <div
          key={transaction.id}
          className="flex justify-between text-black text-sm items-center border-b border-gray-medium border-opacity-25 pb-4"
        >
          <p>{transaction.name}</p>
          <div className="flex items-center gap-4 text-gray-dark text-xs">
            <div className="flex items-center gap-1">
              <p>{transaction.currency}</p>
              <Image src={transaction.icon} alt={transaction.currency} />
            </div>
            <div>
              <p className="text-black text-sm">${transaction.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
