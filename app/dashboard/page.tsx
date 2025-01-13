import { Header } from "@/app/ui/dashboard/Header";
import { Hero } from "@/app/ui/dashboard/Hero";
import { Card } from "@/app/ui/dashboard/card";
import { TransactionList } from "@/app/ui/dashboard/TransactionList";
import USDT from "@/public/icons/usdt.svg";
const list = [
  {
    id: 1,
    name: "Design Milestone 1",
    currency: "USDT",
    amount: 200,
    icon: USDT,
  },
  {
    id: 2,
    name: "Design Milestone 1",
    currency: "USDT",
    amount: 200,
    icon: USDT,
  },
  {
    id: 3,
    name: "Design Milestone 1",
    currency: "USDT",
    amount: 200,
    icon: USDT,
  },
  {
    id: 4,
    name: "Design Milestone 1",
    currency: "USDT",
    amount: 200,
    icon: USDT,
  },
  {
    id: 5,
    name: "Design Milestone 1",
    currency: "USDT",
    amount: 200,
    icon: USDT,
  },
  {
    id: 6,
    name: "Design Milestone 1",
    currency: "USDT",
    amount: 200,
    icon: USDT,
  },
];

export default async function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 p-4 pr-8">
        <Hero />
        <div className="flex gap-4">
          <Card title="Recent Transactions">
            <TransactionList data={list} />
          </Card>
          <Card title="Total Transactions">
            <TransactionList data={list} />
          </Card>
        </div>
      </main>
    </>
  );
}
