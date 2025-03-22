import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ContractInfo {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
}

interface Milestone {
  title: string;
  description: string;
}

interface Condition {
  title: string;
  customCondition?: string;
}

interface Payment {
  amount: string;
  percentageBreakdown: { stage: string; percentage: number }[];
  structureDescription: string;
}

interface EscrowStore {
  // Data lists
  milestones: Milestone[];
  conditions: Condition[];
  payments: Payment[];
  
  // Current selections
  contractInfo: ContractInfo;
  selectedMilestone: string;
  selectedCondition: string;
  customCondition: string;
  paymentAmount: string;
  selectedPaymentStructure: string;
  
  // Step completion tracking
  steps: {
    milestone: boolean;
    condition: boolean;
    payment: boolean;
    preview: boolean;
  };
  
  // Actions
  setContractInfo: (info: Partial<ContractInfo>) => void;
  setSelectedMilestone: (milestone: string) => void;
  setSelectedCondition: (condition: string) => void;
  setCustomCondition: (condition: string) => void;
  setPaymentAmount: (amount: string) => void;
  setSelectedPaymentStructure: (structure: string) => void;
  
  // Step management
  completeStep: (step: 'milestone' | 'condition' | 'payment' | 'preview') => void;
  resetStep: (step: 'milestone' | 'condition' | 'payment' | 'preview') => void;
  
  // Get complete escrow data for preview
  getEscrowData: () => {
    contractInfo: ContractInfo;
    milestone: Milestone | undefined;
    condition: Condition | undefined;
    payment: Payment | undefined;
    customCondition: string;
    paymentAmount: string;
  };
  
  // Reset entire store
  resetStore: () => void;
}

// Initial state definition
const initialState = {
  milestones: [
    {
      title: "Goods Purchase",
      description: "Payment Held in Escrow, Goods Delivered, Buyer Confirms Receipt",
    },
    {
      title: "Freelance Service",
      description: "Initial Deposit Paid, First Draft Delivered, Revisions Completed, Final Delivery Approved",
    },
    {
      title: "Rental Agreement",
      description: "Deposit Paid, Keys Delivered, Remaining Rent Paid",
    },
    {
      title: "NFT Purchase",
      description: "Payment Held in Escrow, Goods Delivered, Buyer Confirms Receipt",
    },
  ],
  conditions: [
    { title: "Manual approval by both parties." },
    { title: "Automatic release upon milestone completion." },
  ],
  payments: [
    {
      amount: "",
      structureDescription: "50-25-15-10",
      percentageBreakdown: [
        { stage: "Initial Deposit Paid", percentage: 50 },
        { stage: "First Draft Delivered", percentage: 25 },
        { stage: "Revisions Completed", percentage: 15 },
        { stage: "Final Delivery Approved", percentage: 10 },
      ],
    },
    {
      amount: "",
      structureDescription: "25-25-25-25",
      percentageBreakdown: [
        { stage: "Initial Deposit Paid", percentage: 25 },
        { stage: "First Draft Delivered", percentage: 25 },
        { stage: "Revisions Completed", percentage: 25 },
        { stage: "Final Delivery Approved", percentage: 25 },
      ],
    },
    {
      amount: "",
      structureDescription: "20-20-20-40",
      percentageBreakdown: [
        { stage: "Initial Deposit Paid", percentage: 20 },
        { stage: "First Draft Delivered", percentage: 20 },
        { stage: "Revisions Completed", percentage: 20 },
        { stage: "Final Delivery Approved", percentage: 40 },
      ],
    },
  ],
  
  contractInfo: {
    title: "",
    startDate: null,
    endDate: null
  },
  selectedMilestone: "",
  selectedCondition: "",
  customCondition: "",
  paymentAmount: "",
  selectedPaymentStructure: "",
  
  steps: {
    milestone: false,
    condition: false,
    payment: false,
    preview: false
  }
};

export const useEscrowStore = create<EscrowStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      
      setContractInfo: (info) => set((state) => ({
        contractInfo: { ...state.contractInfo, ...info }
      })),
      
      setSelectedMilestone: (milestone) => set({ selectedMilestone: milestone }),
      
      setSelectedCondition: (condition) => set({ selectedCondition: condition }),
      
      setCustomCondition: (condition) => set({ customCondition: condition }),
      
      setPaymentAmount: (amount) => set({ paymentAmount: amount }),
      
      setSelectedPaymentStructure: (structure) => set({ selectedPaymentStructure: structure }),
      
      completeStep: (step) => set((state) => ({
        steps: { ...state.steps, [step]: true }
      })),
      
      resetStep: (step) => set((state) => ({
        steps: { ...state.steps, [step]: false }
      })),
      
      getEscrowData: () => {
        const state = get();
        return {
          contractInfo: state.contractInfo,
          milestone: state.milestones.find(m => m.title === state.selectedMilestone),
          condition: state.conditions.find(c => c.title === state.selectedCondition),
          payment: state.payments.find(p => {
            const structureText = p.percentageBreakdown
              .map(item => `${item.stage}: ${item.percentage}%`)
              .join(" - ");
            return structureText === state.selectedPaymentStructure;
          }),
          customCondition: state.customCondition,
          paymentAmount: state.paymentAmount
        };
      },
      
      resetStore: () => set(initialState)
    }),
    {
      name: 'escrow-storage'
    }
  )
);