"use client";
import ControllerCheckboxGroup from "@/components/form/ControllerCheckboxGroup";
import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import UploadSingleImage from "@/components/form/UploadSingleImage";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useCreateSupplier } from "@/queries/supplier/useCreateSupplier.query";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SupplierAddForm = () => {
  const { mutate: createSupplier, status } = useCreateSupplier();

  const methods = useForm({
    defaultValues: {
      category: "",
      company_name: "",
      registration_code: "",
      pic: "",
      contact: "",
      email: "",
      supplier_code: "",
      finance_code: "",
      status: "",
      area_short: [],
      supplier_image_url: null,
    },
  });

  const { handleSubmit, reset, control } = methods;
  const loading = status === "pending";

  const onSubmit = (data: any) => {
    createSupplier(
      { body: data },
      {
        onSuccess: () => {
          reset();
          toast.success("Supplier created successfully");
        },
      },
    );
  };
  const area_short = [
    { value: "KV", label: "KV – Kuala Lumpur" },
    { value: "SU", label: "SU – Subang" },
    { value: "PN", label: "PN – Penang" },
  ];
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} disabled={loading}>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <UploadSingleImage
              name="supplier_image_url"
              label="Supplier Image"
            />

            <GridWrapper className="grid-cols-1 md:grid-cols-2 gap-4">
              <ControllerSelect
                name="category"
                control={control}
                label="Category"
                placeholder="Select Category"
                options={[{ value: "food", label: "Food" }]}
                rules={{ required: "Category is required" }}
              />

              <FormInputField
                name="company_name"
                label="Company Name"
                placeholder="Enter Company Name"
                type="text"
                rules={{ required: "Company name is required" }}
              />

              <FormInputField
                name="registration_code"
                label="Registration Code"
                placeholder="Company Registration Number"
                type="text"
                rules={{ required: "Registration code is required" }}
              />

              <FormInputField
                name="pic"
                label="Person in Charge (PIC)"
                placeholder="Contact Person's Full Name"
                type="text"
                rules={{ required: "PIC name is required" }}
              />

              <FormInputField
                name="contact_number"
                label="Contact"
                placeholder="e.g., +92 300 1234567"
                type="text"
                rules={{
                  required: "Contact number is required",
                  pattern: {
                    value: /^\+?\d{7,15}$/,
                    message: "Invalid contact number",
                  },
                }}
              />

              <FormInputField
                name="email"
                label="Email"
                placeholder="supplier@company.com"
                type="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                }}
              />

              <FormInputField
                name="supplier_code"
                label="Supplier Code"
                placeholder="Auto-generated (Editable)"
                type="text"
              />

              <FormInputField
                name="finance_code"
                label="Finance Code"
                placeholder="Financial Module Mapping Code"
                type="text"
              />

              <ControllerSelect
                name="status"
                control={control}
                label="Status"
                placeholder="Select Status"
                options={[
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
                rules={{ required: "Status is required" }}
              />

              {/* Service Areas */}
              <ControllerCheckboxGroup
                name="area_short"
                control={control}
                label="Service Areas"
                options={area_short}
                rules={{ required: "At least one service area is required" }}
              />
            </GridWrapper>
          </div>

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
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default SupplierAddForm;
