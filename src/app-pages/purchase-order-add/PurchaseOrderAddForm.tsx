"use client";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { FormProvider, useForm } from "react-hook-form";

const PurchaseOrderAddForm = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    defaultValues: {
      po_number: "",
      supplier_id: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const handleSaveToDraft = () => {
    console.log("Saving draft...");
    // add API call or logic here
  };

  const handlePreviewOrder = () => {
    console.log("Previewing order...");
  };

  const handleSubmitOrder = (data: any) => {
    console.log("Submitting order:", data);
    // API call to save order
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(handleSubmitOrder)}>
        <div className="flex flex-col justify-between gap-6">
          {children}
          <div className="flex justify-end items-end gap-4">
            <Button
              variant="secondary"
              className="w-auto"
              type="button"
              onClick={handleSaveToDraft}
            >
              Save as Draft
            </Button>
            <Button
              variant="secondary"
              className="w-auto"
              type="button"
              onClick={handlePreviewOrder}
            >
              Preview Order
            </Button>
            <Button variant="secondary" className="w-auto" type="submit">
              Submit Order
            </Button>
          </div>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default PurchaseOrderAddForm;
