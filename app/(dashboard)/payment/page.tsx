import Image from "next/image"

interface Transaction {
  id: number
  company: string
  logo: string
  logoInitial: string
  logoColor: string
  location: string
  amount: number
  status: string
}

export default function TransactionList() {
  const transactions: Transaction[] = [
    {
      id: 1,
      company: "Mstone.com",
      logo: "/mstone.png",
      logoInitial: "M",
      logoColor: "bg-slate-900",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 2,
      company: "Jastone.ng",
      logo: "/jastone.png",
      logoInitial: "J",
      logoColor: "bg-orange-500",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 3,
      company: "Mstone.com",
      logo: "/mstone.png",
      logoInitial: "M",
      logoColor: "bg-slate-900",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 4,
      company: "Jastone.ng",
      logo: "/jastone.png",
      logoInitial: "J",
      logoColor: "bg-orange-500",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 5,
      company: "Mstone.com",
      logo: "/mstone.png",
      logoInitial: "M",
      logoColor: "bg-slate-900",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
    {
      id: 6,
      company: "Jastone.ng",
      logo: "/jastone.png",
      logoInitial: "J",
      logoColor: "bg-orange-500",
      location: "Canada",
      amount: 700,
      status: "1st Milestone",
    },
  ]

  return (
    <main className="p-10">
      <div className="w-full p-6 bg-white rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Transaction</h2>

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
      </div>
    </main>
  )
}