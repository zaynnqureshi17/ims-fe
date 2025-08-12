"use client";

import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useUpdateUOM } from "@/queries/uom/useUpdateUOM";
import { IUOM } from "@/utils/types/uom.type";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UnitOfMeasurementEditForm = ({ uomData }: { uomData: IUOM }) => {
  const { mutate: updateUOM, status: updateStatus } = useUpdateUOM();
  const { preset_uom_id, uom, for_category, quantity, baseUOM, status } =
    uomData;
  const methods = useForm({
    defaultValues: {
      uom: uom || "",
      for_category: for_category || "",
      quantity: quantity || 0,
      baseUOM: baseUOM || "",
      status: status || "",
    },
  });

  const { handleSubmit, reset, control } = methods;
  const loading = updateStatus === "pending";

  const onSubmit = (data: any) => {
    console.log(data);
    updateUOM(
      { body: data, id: preset_uom_id },
      {
        onSuccess: () => {
          reset(data);
          toast.success("UOM created successfully");
        },
      },
    );
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} disabled={loading}>
        <div className="flex flex-col justify-between">
          <GridWrapper className="grid-cols-1 md:grid-cols-2 !gap-4">
            <FormInputField
              name="uom"
              label="UOM Name"
              placeholder="e.g. Glass"
              type="text"
              rules={{ required: "UOM Name is required" }}
            />

            <ControllerSelect
              name="for_category"
              control={control}
              label="Category"
              placeholder="Select Category"
              options={[
                { value: "Beverage", label: "Beverage" },
                { value: "Food", label: "Food" },
              ]}
              rules={{ required: "Category is required" }}
            />

            <FormInputField
              name="quantity"
              label="Quantity"
              placeholder="250"
              type="number"
              rules={{ required: "Quantity is required" }}
            />

            <ControllerSelect
              name="baseUOM"
              control={control}
              label="Base UOM"
              placeholder="ML"
              options={[
                { value: "ML", label: "ML" },
                { value: "L", label: "L" },
                { value: "KG", label: "KG" },
              ]}
              rules={{ required: "Base UOM is required" }}
            />

            <ControllerSelect
              name="status"
              control={control}
              label="Status"
              placeholder="Select Status"
              options={[
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              rules={{ required: "Status is required" }}
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
      </FormWrapper>
    </FormProvider>
  );
};

export default UnitOfMeasurementEditForm;
