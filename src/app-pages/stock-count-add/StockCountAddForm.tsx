"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import FormTextarea from "@/components/form/FormTextarea";
import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useCreateStockCount } from "@/queries/stock-count/useCreateStockCount.query";
import { optionsType } from "@/utils/types/common.type";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export type StorageFormValues = {
  storage_name: string;
  outlet_id: string;
  status: string;
  description: string;
};

const StockCountAddForm = ({
  outletOptions,
}: {
  outletOptions: optionsType[];
}) => {
  const { mutate: createStorage, status } = useCreateStockCount();

  const methods = useForm<StorageFormValues>({
    defaultValues: {
      storage_name: "",
      outlet_id: "",
      status: "active",
      description: "",
    },
  });

  const { handleSubmit, reset, control } = methods;
  const loading = status === "pending";

  const onSubmit = (data: StorageFormValues) => {
    console.log(data);
    createStorage(
      { body: data },
      {
        onSuccess: () => {
          // reset();
          toast.success("Storage created successfully");
        },
      },
    );
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} disabled={loading}>
        <GridWrapper className="grid-cols-1 md:grid-cols-2 gap-6">
          {/* Storage Name */}
          <FormInputField
            name="storage_name"
            label="Storage Name"
            placeholder="Enter Name"
            type="text"
            rules={{ required: "Storage name is required" }}
          />

          {/* Brand */}
          <ControllerSelect
            name="outlet_id"
            control={control}
            label="Outlet"
            placeholder="Select outlet"
            options={outletOptions}
            rules={{ required: "Brand is required" }}
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
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
                className="w-full bg-white"
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />

          {/* Description */}
          <FormTextarea
            name="description"
            label="Description"
            placeholder="Notes"
            rows={6}
          />
        </GridWrapper>
        <div className="flex justify-end items-center mt-4 gap-6">
          <Button
            type="button"
            variant="cancel"
            className="w-fit"
            onClick={() => reset()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="secondary"
            className="w-fit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default StockCountAddForm;
