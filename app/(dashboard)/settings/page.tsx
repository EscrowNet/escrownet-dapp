import DashboardContentContainer from "@/components/DashboardContentContainer";
import React from "react";

const page = () => {
  return (
    <div className="p-6 w-full h-full">
      <DashboardContentContainer
        title="Escrow Transaction"
        className="w-full min-h-[195px] mt-[1.5rem]"
      >
        <h3>Hello world</h3>
      </DashboardContentContainer>
    </div>
  );
};

export default page;
