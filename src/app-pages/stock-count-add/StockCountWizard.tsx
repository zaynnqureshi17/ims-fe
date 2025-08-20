"use client";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicInfoForm from "./stepper/BasicInfoForm";
import ItemCountForm from "./stepper/ItemCountForm";
import Stepper from "./stepper/Stepper";
import VarianceReviewTable from "./stepper/VarianceReviewTable";
import StockCountPageHeader from "./StockCountPageHeader";

const steps = [
  { id: 1, title: "Basic Info" },
  { id: 2, title: "Item Count" },
  { id: 3, title: "Variance Review" },
];

const StockCountWizard = () => {
  const [activeStep, setActiveStep] = useState(1);
  const methods = useForm({
    defaultValues: {
      basicInfo: {
        name: "",
        description: "",
      },
      itemCount: {
        items: [
          {
            item_name: "",
            category: "",
            storage_area: "",
            full_price: 0,
            full_units: 0,
            loose_units: 0,
            counted_quantity: 0,
            unit_price: 0,
            note_count: "",
          },
        ],
      },
      varianceReview: {
        approved: false,
      },
    },
  });

  const { watch, handleSubmit } = methods;
  const itemCount = watch("itemCount");

  const handleNext = () => setActiveStep((prev) => prev + 1);

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };
  return (
    <FormProvider {...methods}>
      <FormWrapper>
        <StockCountPageHeader />
        <div className="flex flex-col gap-y-8 mt-4">
          <Stepper steps={steps} activeStep={activeStep} />

          {activeStep === 1 && <BasicInfoForm onNext={handleNext} />}
          {activeStep === 2 && <ItemCountForm onNext={handleNext} />}
          {activeStep === 3 && (
            <VarianceReviewTable
              data={itemCount?.items || []}
              onApprove={() => console.log("Approved")}
            />
          )}
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default StockCountWizard;
