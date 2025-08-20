"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import FormTextarea from "@/components/form/FormTextarea";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useFormContext } from "react-hook-form";

const BasicInfoForm = ({ onNext }: { onNext: () => void }) => {
  const { control } = useFormContext();

  return (
    <div className="space-y-6">
      <GridWrapper className="grid-cols-1 md:grid-cols-2 gap-6">
        {/* <Input type="date" placeholder="mm/dd/yyyy" /> */}
        <FormInputField
          name="count_date"
          label="Count Date"
          placeholder="mm/dd/yyyy"
          type="date"
          rules={{ required: "Count date is required" }}
        />
        <ControllerSelect
          name="count_type"
          control={control}
          label="Count Type"
          placeholder="Full Count"
          options={CountOptions}
          rules={{ required: "Count Type is required" }}
        />

        <ControllerSelect
          name="location"
          control={control}
          label="Location"
          placeholder="Select Location"
          options={LocationOptions}
          rules={{ required: "Location is required" }}
        />
        <FormInputField
          name="counted_by"
          label="Staff Name"
          placeholder="Staff member Name"
          type="text"
          rules={{ required: "Staff name is required" }}
        />
      </GridWrapper>
      <FormTextarea
        name="notes"
        label="Notes"
        placeholder="Enter additional notes about this count...."
        rows={6}
      />

      <div className="flex justify-end">
        <Button variant="secondary" className="w-fit" onClick={onNext}>
          Continue to Item Count
        </Button>
      </div>
    </div>
  );
};

export default BasicInfoForm;

const CountOptions = [
  { value: "full", label: "Full Count" },
  { value: "partial", label: "Partial Count" },
];

const LocationOptions = [
  { value: "kitchen", label: "Main Kitchen" },
  { value: "freezer", label: "Freezer" },
];
