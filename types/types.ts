export interface ContractInterface {
    image: string;
    title: string;
    location: string;
    amount: number;
    client: string;
    period: string;
  }
  
  export interface TransactionInterface {
    image: string;
    from: string;
    date: string;
    amount: number;
    recieved: boolean;
  }
  