import {
  ContractInterface,
  NotificationInterface,
  TransactionInterface,
} from "../types/types";

export const contracts: ContractInterface[] = [
  {
    image: "/mstone.png",
    title: "Mstone.com",
    location: "Canada",
    amount: 3000,
    client: "Castgate lockgate",
    period: "Jan 20, 2021 - FEB 27, 2021",
  },
  {
    image: "/jastone.png",
    title: "Jastone.ng",
    location: "Canada",
    amount: 3000,
    client: "Castgate lockgate",
    period: "Jan 20, 2021 - FEB 27, 2021",
  },
];

export const transactions: TransactionInterface[] = [
  {
    image: "/exchange.png",
    from: "Mstone",
    date: "Jan 20, 2021",
    amount: 100,
    recieved: true,
  },
  {
    image: "/paid-in.png",
    from: "Mstone",
    date: "Jan 20, 2021",
    amount: 100,
    recieved: true,
  },
  {
    image: "/paid-in.png",
    from: "Mstone",
    date: "Jan 20, 2021",
    amount: 100,
    recieved: false,
  },
];

export const notifications: NotificationInterface[] = [
  {
    title: "Sign the Escrow Contract (Mstone)",
    date: "Jan 20, 2021",
    message:
      "The escrow terms are ready for your approval. Please review and sign the contract to proceed.",
    type: "action",
  },
  {
    title: "New Escrow",
    date: "Jan 20, 2021",
    message:
      "You’ve successfully deposited $2,500 into the escrow account for Milestone 1: ‘Initial Deposit.’ The funds are now securely held in escrow.",
    type: "info",
  },

  {
    title: "Payments Received in Escrow",
    date: "Jan 20, 2021",
    message: "New Escrow created by Mstone",
    type: "info",
  },
];
