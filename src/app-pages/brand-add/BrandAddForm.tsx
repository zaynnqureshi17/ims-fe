"use client";
import FormInputField from "@/components/form/FormInputField";
import FormTextarea from "@/components/form/FormTextarea";
import SelectField from "@/components/form/SelectField";
import UploadSingleImage from "@/components/form/UploadSingleImage";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useCreateBrand } from "@/queries/brands/useCreateBrand.query";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BrandAddForm = () => {
  const { mutate: createBrand, status } = useCreateBrand();

  const methods = useForm({
    defaultValues: {
      brand_name: "",
      status: "",
      description: "",
      logo: null,
    },
  });

  const { handleSubmit, reset, control } = methods;
  const loading = status === "pending";

  const onSubmit = (data: any) => {
    createBrand(
      { body: data },
      {
        onSuccess: () => {
          reset({
            brand_name: "",
            status: "",
            description: "",
            logo: null,
          });
          toast.success("Brand created successfully");
        },
      },
    );
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} disabled={loading}>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            {/* Image Upload */}
            <UploadSingleImage name="logo" label="Logo" />

            <GridWrapper className="grid-cols-1 md:grid-cols-2 ">
              {/* Brand Name */}
              <FormInputField
                name="brand_name"
                label="Brand Name"
                placeholder="Enter Brand Name"
                type="text"
              />

              {/* Status Select */}
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
            </GridWrapper>

            {/* Description */}
            <FormTextarea
              name="description"
              label="Description"
              placeholder="Enter Brand Description"
              rows={6}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end items-center mt-4 gap-6">
            <Button
              type="button"
              variant="cancel"
              className="w-fit"
              onClick={() => reset()}
            >
              Cancel
            </Button>
            <Button type="submit" variant="secondary" className="w-fit">
              Save Brand
            </Button>
          </div>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default BrandAddForm;
