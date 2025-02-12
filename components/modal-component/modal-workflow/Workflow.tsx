"use client";

import React, { useState } from "react";
import MilestoneModal from "../MilestoneModal";
import ConditionModal from "../ConditionModal";
import PaymentModal from "../PaymentModal";

interface ModalProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

interface IModalWorkflow {
  closeModal: () => void;
}
const ModalWorkflow: React.FC<IModalWorkflow> = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState<
    "milestone" | "condition" | "payment"
  >("milestone");

  const handleNextFromMilestone = () => {
    setCurrentStep("condition");
  };

  const handleNextFromCondition = () => {
    setCurrentStep("payment");
  };

  const handlePreviousFromCondition = () => {
    setCurrentStep("milestone");
  };

  const handlePreviousFromPayment = () => {
    setCurrentStep("condition");
  };

  return (
    <>
      {currentStep === "milestone" && (
        <MilestoneModal
          onNext={handleNextFromMilestone}
          closeModal={closeModal}
        />
      )}
      {currentStep === "condition" && (
        <ConditionModal
          onPrevious={handlePreviousFromCondition}
          onNext={handleNextFromCondition}
        />
      )}
      {currentStep === "payment" && (
        <PaymentModal
          onPrevious={handlePreviousFromPayment}
          onNext={() => {}}
        />
      )}
    </>
  );
};

export default ModalWorkflow;
