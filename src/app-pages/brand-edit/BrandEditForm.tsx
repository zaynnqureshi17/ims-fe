"use client";
import FormInputField from "@/components/form/FormInputField";
import FormTextarea from "@/components/form/FormTextarea";
import SelectField from "@/components/form/Select";
import UploadSingleImage from "@/components/form/UploadSingleImage";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { FormProvider, useForm } from "react-hook-form";

const BrandEditForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <UploadSingleImage onFileUpload={(file) => console.log(file)} />

          <GridWrapper className="grid-cols-1 md:grid-cols-2 ">
            <FormInputField
              name="name"
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

          <FormTextarea
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
    </FormProvider>
  );
};

export default BrandEditForm;
