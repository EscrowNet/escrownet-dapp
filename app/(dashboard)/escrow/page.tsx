import { contracts } from "@/data/mock-data";
import Contract from "../../../components/Contracts";
import DashboardContentContainer from "../../../components/DashboardContentContainer";
import Header from "../../../components/dashboardHeader";
import { ContractInterface } from "@/types/types";

function Escrows() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <Header />
      <div className="p-6 w-full h-full">
        <DashboardContentContainer
          title="Escrow Transaction"
          className="w-full min-h-[195px] mt-[1.5rem]"
        >
          <div className="relative text-left">
            <p className="font-medium text-sm pr-8">
              Protect your funds and ensure trust in every deal by using escrow.
              Your money stays safe until all terms are met, giving both you and
              your counterparty peace of mind. Make your first escrow
              payment today.!!
            </p>
            <button className=" mt-2 px-6 py-2 bg-[#2D0561] text-white font-medium rounded transition">
              Create Transaction
            </button>
          </div>
        </DashboardContentContainer>

        <DashboardContentContainer
          title="Your active contracts"
          className="w-full  h-[34rem] mt-[2.4rem]"
        >
          <div className="grid grid-cols-2 gap-5">
            {contracts.map((contract: ContractInterface) => (
              <Contract
                key={contract.title}
                title={contract.title}
                image={contract.image}
                location={contract.location}
                period={contract.period}
                amount={contract.amount}
                client={contract.client}
              />
            ))}
            {contracts.map((contract: ContractInterface) => (
              <Contract
                key={contract.title}
                title={contract.title}
                image={contract.image}
                location={contract.location}
                period={contract.period}
                amount={contract.amount}
                client={contract.client}
              />
            ))}
          </div>
        </DashboardContentContainer>
      </div>
    </div>
  );
}
export default Escrows;
