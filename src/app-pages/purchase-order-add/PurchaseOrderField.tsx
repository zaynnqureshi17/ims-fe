"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import { DateRangePicker } from "@/components/form/DateRangePicker";
import FormInputField from "@/components/form/FormInputField";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useFormContext } from "react-hook-form";

// Example supplier options (replace with API data if needed)
const supplierOptions = [
  { value: "1", label: "Supplier A" },
  { value: "2", label: "Supplier B" },
  { value: "3", label: "Supplier C" },
];

const PurchaseOrderField = () => {
  const { control } = useFormContext();

  return (
    <GridWrapper className="grid-cols-1 md:grid-cols-3">
      <FormInputField
        name="po_number"
        label="PO Number"
        placeholder="PO_2024-001234"
        type="text"
        rules={{
          required: "PO Number is required",
        }}
      />
      <ControllerSelect
        name="supplier_id"
        control={control}
        label="Supplier"
        placeholder="Select Supplier"
        options={supplierOptions}
        rules={{ required: "Supplier is required" }}
      />
      <DateRangePicker />
    </GridWrapper>
  );
};

export default PurchaseOrderField;
