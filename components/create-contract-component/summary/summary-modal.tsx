import ProgressBar from "../ProgressBar";
import Pagination from "../Pagination";
import SummaryHeader from "../SummaryHeader";
import ContactSummary from "@/components/create-contract-component/summary/ContactSummary";
import MilestoneSection from "@/components/create-contract-component/summary/MilestoneSection";
import TermsAndConditions from "@/components/create-contract-component/summary/TermsAndConditions";

export default function SummaryModal({ open }: { open: boolean }) {
  return (
    <dialog
      open={open}
      className="bg-white absolute top-0 m-0 w-full h-screen text-black"
    >
      <div className="lg:px-10 px-5 items-center flex gap-10 flex-col h-screen">
        <SummaryHeader />
        <ProgressBar
          items={[
            {
              name: "Milestone",
              status: "completed",
            },
            {
              name: "Condition",
              status: "completed",
            },
            {
              name: "Payment",
              status: "completed",
            },
            {
              name: "Preview",
              status: "active",
            },
          ]}
        />
        <ContactSummary />
        <MilestoneSection />
        <TermsAndConditions />
        <Pagination />
      </div>
    </dialog>
  );
}
