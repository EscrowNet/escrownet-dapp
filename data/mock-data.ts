import { ContractInterface, TransactionInterface } from "../types/types";

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
