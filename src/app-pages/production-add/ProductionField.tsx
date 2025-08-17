"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import { Calendar28 } from "@/components/form/DatePicker";
import FormInputField from "@/components/form/FormInputField";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useFormContext } from "react-hook-form";

const recipeOptions = [
  { value: "pizza-margherita", label: "Pizza Margherita" },
  { value: "grilled-salmon", label: "Grilled Salmon" },
  { value: "caesar-salad", label: "Caesar Salad" },
];

const statusOptions = [
  { value: "completed", label: "Completed" },
  { value: "pending", label: "Pending" },
  { value: "failed", label: "Failed" },
  { value: "draft", label: "Draft" },
];

const ProductionField = () => {
  const { control } = useFormContext();

  return (
    <GridWrapper className="grid-cols-1 md:grid-cols-2 ">
      <FormInputField
        name="produced_by"
        label="Produced By"
        placeholder="John Smith"
        type="text"
        rules={{ required: "Produced By is required" }}
      />
      <Calendar28 />

      <ControllerSelect
        name="recipe"
        control={control}
        label="Recipe"
        placeholder="Select Recipe"
        options={recipeOptions}
        rules={{ required: "Recipe is required" }}
      />
      <FormInputField
        name="quantity"
        label="Quantity"
        placeholder="25"
        type="number"
        rules={{ required: "Quantity is required" }}
      />

      <FormInputField
        name="unit_cost"
        label="Unit Cost"
        placeholder="$8.5"
        type="text"
      />
      <ControllerSelect
        name="status"
        control={control}
        label="Status"
        placeholder="Completed"
        options={statusOptions}
        rules={{ required: "Status is required" }}
      />

      <FormInputField
        name="total_cost"
        label="Total Cost"
        placeholder="$"
        type="text"
        className="md:col-span-2"
      />
    </GridWrapper>
  );
};

export default ProductionField;
