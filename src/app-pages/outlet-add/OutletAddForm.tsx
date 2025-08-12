"use client";

import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetBrand } from "@/queries/brands/useGetBrand.query";
import { useCreateOutlet } from "@/queries/outlets/useCreateOutlet.query";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const OutletAddForm = () => {
  const { mutate: createOutlet, status } = useCreateOutlet();
  const { data: roles } = useGetBrand();
  const { brandOptions } = useMultiOptions({
    brands: roles?.body?.data,
  });

  const methods = useForm({
    defaultValues: {
      brand_id: "",
      outlet_code: "",
      outlet_name: "",
      company_name: "",
      company_registration_number: "",
      street_address: "",
      country: "",
      state: "",
      city: "",
      status: "",
      postal_code: "",
      finance_code: "",
      preferred_delivery_hour: "",
    },
  });

  const { handleSubmit, reset, control } = methods;
  const loading = status === "pending";

  const onSubmit = (data: any) => {
    console.log(data);
    createOutlet(
      { body: data },
      {
        onSuccess: () => {
          reset();
          toast.success("Outlet created successfully");
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
              name="outlet_code"
              label="Outlet Code"
              placeholder="Enter unique outlet code (e.g., OUT-FSD-001)"
              type="text"
            />
            <FormInputField
              name="outlet_name"
              label="Outlet Name"
              placeholder="Enter outlet name (e.g., Karahi Express - D Ground)"
              type="text"
            />
            <FormInputField
              name="company_name"
              label="Company Name"
              placeholder="Enter legal company name (e.g., Karahi Foods Pvt Ltd)"
              type="text"
            />
            <FormInputField
              name="company_registration_number"
              label="Company Registration Number"
              placeholder="Enter company registration number (e.g., 123456-7)"
              type="text"
            />
            <FormInputField
              name="street_address"
              label="Street Address"
              placeholder="Enter complete street address (e.g., 12 D-Ground, Peoples Colony)"
              type="text"
              className="col-span-2"
            />
            <ControllerSelect
              name="country"
              control={control}
              label="Country"
              placeholder="Select Country"
              options={[
                { value: "Pakistan", label: "Pakistan" },
                { value: "India", label: "India" },
              ]}
              rules={{ required: "Department is required" }}
            />
            <ControllerSelect
              name="state"
              control={control}
              label="State"
              placeholder="Select State"
              options={[
                { value: "Punjab", label: "Punjab" },
                { value: "Sindh", label: "Sindh" },
              ]}
              rules={{ required: "State is required" }}
            />
            <ControllerSelect
              name="city"
              control={control}
              label="City"
              placeholder="Select City"
              options={[
                { value: "Faisalabad", label: "Faisalabad" },
                { value: "Karachi", label: "Karachi" },
              ]}
              rules={{ required: "City is required" }}
            />

            <FormInputField
              name="postal_code"
              label="ZIP/Postal Code"
              placeholder="Enter postal code (e.g., 38000)"
              type="text"
            />
            <FormInputField
              name="finance_code"
              label="Finance Code"
              placeholder="Enter finance/internal code (e.g., FIN-FSD-01)"
              type="text"
            />
            <FormInputField
              name="preferred_delivery_hour"
              label="Delivery Time"
              placeholder="Enter preferred delivery hour (e.g., 10:00 AM - 12:00 PM)"
              type="text"
            />
            <ControllerSelect
              name="brand_id"
              control={control}
              label="Brand"
              placeholder="Select Brand"
              options={brandOptions}
              rules={{ required: "Brand is required" }}
            />
            <ControllerSelect
              name="status"
              control={control}
              label="Status"
              placeholder="Select City"
              options={[
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
              rules={{ required: "City is required" }}
            />
          </GridWrapper>
        </div>
        <div className="flex justify-end items-center mt-4 gap-6">
          <Button type="button" variant="cancel" className="w-fit">
            Cancel
          </Button>
          <Button type="submit" variant="secondary" className="w-fit">
            Save Outlet
          </Button>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default OutletAddForm;
