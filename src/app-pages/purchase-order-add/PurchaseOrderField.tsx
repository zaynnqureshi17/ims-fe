"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import { Calendar28 } from "@/components/form/DatePicker";
import FormInputField from "@/components/form/FormInputField";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { optionsType } from "@/utils/types/common.type";
import { useFormContext } from "react-hook-form";

// Example supplier options (replace with API data if needed)

const PurchaseOrderField = ({
  supplierOptions,
}: {
  supplierOptions: optionsType[];
}) => {
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
      <Calendar28
        name="delivery_date"
        label="Delivery Date"
        control={control}
      />
      <Calendar28 name="order_date" label="Order Date" control={control} />
    </GridWrapper>
  );
};

export default PurchaseOrderField;
