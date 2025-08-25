"use client";
import FormTextarea from "@/components/form/FormTextarea";

const TransferAdditional = () => {
  return (
    <FormTextarea
      name="additional_notes"
      label="Additional Notes"
      placeholder="Enter any additional notes or special instructions (optional)"
      rows={2}
    />
  );
};

export default TransferAdditional;
