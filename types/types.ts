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
  
  export interface NotificationInterface {
    title: string;
    date: string;
    message: string;
    type : "info" | "action";
    id ?: number;
  }

  export interface PaymentsInterface {
    id: number
    company: {
      name: string
      location: string
      logo: string
    }
    amount: number
    milestone: string
    details: {
      milestone: string
      amountPaid: number
      recipientWallet: string
      status: string
      description: string
    }
  }