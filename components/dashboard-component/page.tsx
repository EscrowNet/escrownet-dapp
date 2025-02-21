"use client";
import { useState } from "react";
import { contracts, transactions } from "../../data/mock-data";
import { ContractInterface, TransactionInterface } from "../../types/types";
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
    <div className="p-6 w-full h-full">
      <div className="w-full flex gap-x-8">
        <DashboardContentContainer
          title="Your active contracts"
          className="w-1/2  h-[34rem]"
        >
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
        </DashboardContentContainer>
        <DashboardContentContainer
          title="Total Transaction"
          subTitle="JAN 1-JUN 30 2021"
          className="w-1/2  h-[34rem]"
        >
          <TotalTransactionChart />
        </DashboardContentContainer>
      </div>

      <DashboardContentContainer
        title="Transaction History"
        className="w-full h-[20.9rem] mt-[1.5rem]"
      >
        {transactionsInState.map((transaction: TransactionInterface, index) => (
          <Transaction
            key={index + transaction.date + transaction.amount}
            image={transaction.image}
            amount={transaction.amount}
            from={transaction.from}
            date={transaction.date}
            recieved={transaction.recieved}
          />
        ))}
      </DashboardContentContainer>
    </div>
  );
}
