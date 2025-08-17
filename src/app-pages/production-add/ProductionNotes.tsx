"use client";
import FormTextarea from "@/components/form/FormTextarea";

const ProductionNotes = () => {
  return (
    <FormTextarea
      name="notes"
      label="Notes"
      placeholder="Internal Notes"
      rows={2}
    />
  );
};

export default ProductionNotes;
