import ProgressBar from "../../Components/create-contract-component/ProgressBar";
import Pagination from "../../Components/create-contract-component/Pagination";
import PercentageForm from "../../Components/create-contract-component/payment/PercentageForm";
import SummaryHeader from "../../Components/create-contract-component/SummaryHeader";
import ContactSummary from "@/app/Components/create-contract-component/summary/ContactSummary";
import MilestoneSection from "@/app/Components/create-contract-component/summary/MilestoneSection";
import TermsAndConditions from "@/app/Components/create-contract-component/summary/TermsAndConditions";

export default function page() {
  return (
    <section className="bg-white lg:px-10 px-5 items-center flex gap-10 flex-col h-screen text-black">
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
    </section>
  );
}
