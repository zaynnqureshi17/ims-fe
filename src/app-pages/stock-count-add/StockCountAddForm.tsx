"use client";
import FormInputField from "@/components/form/FormInputField";
import FormTextarea from "@/components/form/FormTextarea";
import SelectField from "@/components/form/Select";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

export type StorageFormValues = {
  name: string;
  brand: string;
  outlet: string;
  department: string;
  status: string;
  description: string;
};

const StockCountAddForm: React.FC = () => {
  const methods = useForm<StorageFormValues>({
    defaultValues: {
      name: "",
      brand: "",
      outlet: "",
      department: "",
      status: "Active",
      description: "",
    },
  });
  const { handleSubmit, control } = methods;

  const onSubmit = (data: StorageFormValues) => {
    console.log("Storage data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GridWrapper className="grid-cols-1 md:grid-cols-2 gap-6">
          {/* Storage Name */}
          <FormInputField
            name="name"
            label="Storage Name"
            placeholder="Enter Name"
            type="text"
          />

          {/* Brand */}
          <Controller
            name="brand"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Brand"
                placeholder="Select Brand"
                options={[
                  { value: "brand1", label: "Brand 1" },
                  { value: "brand2", label: "Brand 2" },
                  { value: "brand3", label: "Brand 3" },
                ]}
                className="w-full bg-white"
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />

          {/* Outlet */}
          <Controller
            name="outlet"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Outlet"
                placeholder="Select Outlet"
                options={[
                  { value: "outlet1", label: "Outlet 1" },
                  { value: "outlet2", label: "Outlet 2" },
                ]}
                className="w-full bg-white"
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />

          {/* Department */}
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Department"
                placeholder="Select Department"
                options={[
                  { value: "sales", label: "Sales" },
                  { value: "inventory", label: "Inventory" },
                  { value: "finance", label: "Finance" },
                ]}
                className="w-full bg-white"
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />

          {/* Status */}
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Status"
                placeholder="Select Status"
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Inactive", label: "Inactive" },
                ]}
                className="w-full bg-white"
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />

          {/* Description */}
          <FormTextarea label="Description" placeholder="Notes" rows={6} />
        </GridWrapper>

        <div className="flex justify-end items-center mt-4 gap-6">
          <Button type="button" variant="cancel" className="w-fit">
            Cancel
          </Button>
          <Button type="submit" variant="secondary" className="w-fit">
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default StockCountAddForm;
