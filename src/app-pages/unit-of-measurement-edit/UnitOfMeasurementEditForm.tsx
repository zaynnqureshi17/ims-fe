"use client";

import FormInputField from "@/components/form/FormInputField";
import SelectField from "@/components/form/Select";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { FormProvider, useForm } from "react-hook-form";

const UnitOfMeasurementEditForm = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col justify-between">
        <GridWrapper className="grid-cols-1 md:grid-cols-2 !gap-4">
          <FormInputField
            name="uomName"
            label="UOM Name"
            placeholder="e.g. Glass"
            type="text"
          />
          <SelectField
            label="Category"
            className="w-full bg-white"
            placeholder="Select Category"
            options={[
              { value: "Beverage", label: "Beverage" },
              { value: "Food", label: "Food" },
            ]}
          />
          <FormInputField
            name="quantity"
            label="Quantity"
            placeholder="250"
            type="number"
          />
          <SelectField
            label="Base UOM"
            className="w-full bg-white"
            placeholder="ML"
            options={[
              { value: "ML", label: "ML" },
              { value: "L", label: "L" },
              { value: "KG", label: "KG" },
            ]}
          />
          <SelectField
            label="Status"
            className="w-full bg-white"
            placeholder="Active"
            options={[
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
          />
        </GridWrapper>
      </div>
      <div className="flex justify-end items-center mt-4 gap-6">
        <Button type="button" variant="cancel" className="w-fit">
          Cancel
        </Button>
        <Button type="submit" variant="secondary" className="w-fit">
          Save UOM
        </Button>
      </div>
    </FormProvider>
  );
};

export default UnitOfMeasurementEditForm;
