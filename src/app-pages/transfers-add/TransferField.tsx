"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import { Calendar28 } from "@/components/form/DatePicker";
import FormInputField from "@/components/form/FormInputField";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useFormContext } from "react-hook-form";

const locationOptions = [
  { value: "main-kitchen", label: "Main Kitchen" },
  { value: "bar-station", label: "Bar Station" },
  { value: "storage-room", label: "Storage Room" },
];

const transferReasonOptions = [
  { value: "stock-replenishment", label: "Stock Replenishment" },
  { value: "internal-transfer", label: "Internal Transfer" },
  { value: "damaged-items", label: "Damaged Items" },
];

const TransferField = () => {
  const { control } = useFormContext();

  return (
    <GridWrapper className="grid-cols-1 md:grid-cols-2 ">
      <FormInputField
        name="transfer_id"
        label="Transfer ID"
        placeholder="TRF-2024-001"
        type="text"
        rules={{ required: "Transfer ID is required" }}
      />
      <Calendar28 />

      <ControllerSelect
        name="source_location"
        control={control}
        label="Source Location"
        placeholder="Select Source Location"
        options={locationOptions}
        rules={{ required: "Source Location is required" }}
      />
      <ControllerSelect
        name="destination_location"
        control={control}
        label="Destination Location"
        placeholder="Select Destination Location"
        options={locationOptions}
        rules={{ required: "Destination Location is required" }}
      />

      <FormInputField
        name="do_number"
        label="DO Number"
        placeholder="Enter Delivery Order Number"
        type="text"
      />
      <FormInputField
        name="invoice_no"
        label="Invoice No"
        placeholder="Enter Invoice Number"
        type="text"
      />

      <div className="md:col-span-2">
        <ControllerSelect
          name="transfer_reason"
          control={control}
          label="Transfer Reason"
          placeholder="Select Transfer Reason"
          options={transferReasonOptions}
          rules={{ required: "Transfer Reason is required" }}
        />
      </div>
    </GridWrapper>
  );
};

export default TransferField;
