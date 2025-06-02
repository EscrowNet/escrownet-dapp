"use client";
import { useState } from "react";
import { contracts, transactions } from "../../data/mock-data";
import type {
  ContractInterface,
  TransactionInterface,
} from "../../types/types";
import Contract from "../Contracts";
import DashboardContentContainer from "../DashboardContentContainer";
import TotalTransactionChart from "../TotalTransactionChart";
import Transaction from "../Transaction";

export default function Home() {
  const [contractsInState, setContractsInState] =
    useState<ContractInterface[]>(contracts);
  const [transactionsInState, setTransactionsInState] =
    useState<TransactionInterface[]>(transactions);

  return (
    <div className="p-3 sm:p-4 lg:p-6 w-full h-full">
      {/* Main content grid - responsive layout */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
        {/* Contracts section */}
        <DashboardContentContainer
          title="Your active contracts"
          className="w-full h-auto min-h-[300px] sm:min-h-[400px] lg:h-[34rem]"
        >
          <div className="space-y-3 sm:space-y-4 lg:space-y-5">
            {contractsInState.map((contract: ContractInterface) => (
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

        {/* Chart section */}
        <DashboardContentContainer
          title="Total Transaction"
          subTitle="JAN 1-JUN 30 2021"
          className="w-full h-auto min-h-[300px] sm:min-h-[400px] lg:h-[34rem]"
        >
          <TotalTransactionChart />
        </DashboardContentContainer>
      </div>

      {/* Transaction History section */}
      <DashboardContentContainer
        title="Transaction History"
        className="w-full h-auto min-h-[250px] lg:h-[20.9rem] mt-4 lg:mt-6"
      >
        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
          {transactionsInState.map(
            (transaction: TransactionInterface, index) => (
              <Transaction
                key={index + transaction.date + transaction.amount}
                image={transaction.image}
                amount={transaction.amount}
                from={transaction.from}
                date={transaction.date}
                recieved={transaction.recieved}
              />
            )
          )}
        </div>
      </DashboardContentContainer>
    </div>
  );
}
