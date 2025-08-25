"use client";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { useCreateTransfer } from "@/queries/transfer/useCreateTransfer.query";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const TransfersAddForm = ({ children }: { children: React.ReactNode }) => {
  const { mutate: createTransfer, status } = useCreateTransfer();
  const methods = useForm({
    defaultValues: {
      outlet_id: "",
      transfer_to_from_outlet_id: "",
      category_id: "",
      date: "",
      in_out: "",
      reason_do_invoice_number: "",
      transfer_items: [],
    },
  });

  const { handleSubmit, reset } = methods;

  const handleSaveToDraft = () => {
    console.log("Saving draft...");
    // API call for draft save
  };

  const handleSubmitOrder = (data: any) => {
    console.log("Submitting transfer:", data);
    createTransfer(
      { body: data },
      {
        onSuccess: () => {
          reset();
          toast.success("Transfer created successfully");
        },
      },
    );
    // API call for final submit
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper
        onSubmit={handleSubmit(handleSubmitOrder)}
        disabled={status === "pending"}
      >
        <div className="flex flex-col justify-between gap-6">
          {children}
          <div className="flex justify-end items-end gap-4">
            <Button
              variant="secondary"
              className="w-auto"
              type="button"
              onClick={handleSaveToDraft}
            >
              Cancel
            </Button>
            <Button variant="secondary" className="w-auto" type="submit">
              Submit Transfer
            </Button>
          </div>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default TransfersAddForm;
