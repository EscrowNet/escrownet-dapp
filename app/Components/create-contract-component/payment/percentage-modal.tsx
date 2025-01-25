import ProgressBar from "../ProgressBar";
import Pagination from "../Pagination";
import PercentageForm from "./PercentageForm";
import SummaryHeader from "../SummaryHeader";

export default function PercentageModal({ open }: { open: boolean }) {
  return (
    <dialog
      open={open}
      className="bg-white absolute top-0 m-0 w-full h-screen text-black"
    >
      <div className="flex gap-10 flex-col lg:px-10 px-5 items-center">
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
              status: "active",
            },
            {
              name: "Preview",
              status: "pending",
            },
          ]}
        />
        <PercentageForm />
        <Pagination />
      </div>
    </dialog>
  );
}
