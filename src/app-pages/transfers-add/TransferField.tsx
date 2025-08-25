"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import { Calendar28 } from "@/components/form/DatePicker";
import FormInputField from "@/components/form/FormInputField";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { optionsType } from "@/utils/types/common.type";
import { useFormContext } from "react-hook-form";

const inOutOptions = [
  { value: "IN", label: "IN" },
  { value: "OUT", label: "OUT" },
];

// TODO: Replace with API fetched outlets + categories

const transferReasonOptions = [
  { value: "event", label: "Event" },
  { value: "r&d", label: "R&D" },
  { value: "staff-meal", label: "Staff Meal" },
  { value: "contra", label: "Contra" },
];

const TransferField = ({
  outletOptions,
  departmentOptions,
}: {
  outletOptions: optionsType[];
  departmentOptions: optionsType[];
}) => {
  const { control } = useFormContext();

  return (
    <GridWrapper className="grid-cols-1 md:grid-cols-2">
      {/* Date */}
      <Calendar28 name="date" label="Transfer Date" control={control} />

      {/* In / Out */}
      <ControllerSelect
        name="in_out"
        control={control}
        label="Transfer Type"
        placeholder="Select IN / OUT"
        options={inOutOptions}
        rules={{ required: "Transfer type is required" }}
      />

      {/* Source Outlet */}
      <ControllerSelect
        name="outlet_id"
        control={control}
        label="Source Outlet"
        placeholder="Select Source Outlet"
        options={outletOptions}
        rules={{ required: "Source Outlet is required" }}
      />

      {/* Destination Outlet */}
      <ControllerSelect
        name="transfer_to_from_outlet_id"
        control={control}
        label="Destination Outlet"
        placeholder="Select Destination Outlet"
        options={outletOptions}
        rules={{ required: "Destination Outlet is required" }}
      />

      {/* Category */}
      <ControllerSelect
        name="category_id"
        control={control}
        label="Category"
        placeholder="Select Category"
        options={departmentOptions}
        rules={{ required: "Category is required" }}
      />

      {/* Reason / DO / Invoice Number */}
      <FormInputField
        name="reason_do_invoice_number"
        label="Reason / DO / Invoice Number"
        placeholder="Enter reason or DO/Invoice number"
        type="text"
        rules={{ required: "This field is required" }}
      />

      {/* Transfer Reason */}
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
