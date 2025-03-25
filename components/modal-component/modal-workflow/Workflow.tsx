"use client";

import React, { useState } from "react";
import MilestoneModal from "../MilestoneModal";
import ConditionModal from "../ConditionModal";
import PaymentModal from "../PaymentModal";
import PreviewModal from "../PreviewModal";

interface ModalProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

interface IModalWorkflow {
  closeModal: () => void;
}
const ModalWorkflow: React.FC<IModalWorkflow> = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState<
    "milestone" | "condition" | "payment" | "preview"
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

  const handleNextFromPayment = () => {
    setCurrentStep("preview");
  };

  const handlePreviousFromPreview = () => {
    setCurrentStep("payment");
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
          onNext={handleNextFromPayment}
        />
      )}

      {currentStep === "preview" && (
        <PreviewModal
          onPrevious={handlePreviousFromPreview}
          closeModal={closeModal}
        // onNext={() => {}}
        />
      )}
    </>
  );
};

export default ModalWorkflow;
