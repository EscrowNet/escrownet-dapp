import Header from "../dashboard-header/page";
import Banner from "../banner/page";
import Transactions from "../transaction-list/page";

export default function Dashboard() {
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
