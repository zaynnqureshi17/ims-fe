"use client";
import FormInputField from "@/components/form/FormInputField";
import FormTextarea from "@/components/form/FormTextarea";
import SelectField from "@/components/form/SelectField";
import UploadSingleImage from "@/components/form/UploadSingleImage";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useUpdateBrand } from "@/queries/brands/useUpdateBrand";
import { IBrand } from "@/utils/types/brand.type";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BrandEditForm = ({ brandData }: { brandData: IBrand }) => {
  const { mutate: onUpdateBrand, status: updateStatus } = useUpdateBrand();
  const { logo, brand_name, description } = brandData;
  const methods = useForm({
    defaultValues: {
      logo,
      brand_name,
      description,
    },
  });
  const { handleSubmit } = methods;
  const loading = updateStatus === "pending";

  const onSubmit = (data: any) => {
    onUpdateBrand(
      { body: data, id: brandData.brand_id },
      {
        onSuccess: () => {
          toast.success("Brand updated successfully");
        },
      },
    );
  };
  console.log(brandData);
  return (
    <FormProvider {...methods}>
      <FormWrapper disabled={loading} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <UploadSingleImage name="logo" label="Logo" />
            <GridWrapper className="grid-cols-1 md:grid-cols-2 ">
              <FormInputField
                name="brand_name"
                label="Brand Name"
                placeholder="Enter Brand Name"
                type="text"
              />
              <SelectField
                label="Status"
                placeholder="Active"
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Inactive", label: "Inactive" },
                ]}
                className="w-full bg-white  "
                onValueChange={(value) => console.log(value)}
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
          <div className="flex justify-end items-center mt-4 gap-6">
            <Button type="button" variant="cancel" className="w-fit">
              Cancel
            </Button>
            <Button type="submit" variant="secondary" className="w-fit">
              Update Brand
            </Button>
          </div>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default BrandEditForm;
