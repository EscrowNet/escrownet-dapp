import Header from "../dashboardHeader";
import Banner from "../banner";
import Transactions from "../transactionList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <Banner />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Transactions title="Recent Transactions" />
          <Transactions title="Total Transactions" />
        </div>
      </div>
    </div>
  );
}
