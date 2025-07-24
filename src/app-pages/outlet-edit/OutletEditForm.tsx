"use client";

import FormInputField from "@/components/form/FormInputField";
import SelectField from "@/components/form/Select";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { FormProvider, useForm } from "react-hook-form";

const OutletEditForm = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col justify-between">
        <GridWrapper className="grid-cols-1 md:grid-cols-2 !gap-4">
          <FormInputField
            name="outletCode"
            label="Outlet Code"
            placeholder="Enter unique outlet code (e.g., OUT-FSD-001)"
            type="text"
          />
          <FormInputField
            name="outletName"
            label="Outlet Name"
            placeholder="Enter outlet name (e.g., Karahi Express - D Ground)"
            type="text"
          />
          <FormInputField
            name="companyName"
            label="Company Name"
            placeholder="Enter legal company name (e.g., Karahi Foods Pvt Ltd)"
            type="text"
          />
          <FormInputField
            name="registrationNumber"
            label="Company Registration Number"
            placeholder="Enter company registration number (e.g., 123456-7)"
            type="text"
          />
          <FormInputField
            name="streetAddress"
            label="Street Address"
            placeholder="Enter complete street address (e.g., 12 D-Ground, Peoples Colony)"
            type="text"
            className="col-span-2"
          />
          <SelectField
            label="Country"
            className="w-full bg-white"
            placeholder="Select country (e.g., Pakistan)"
            options={[
              { value: "Pakistan", label: "Pakistan" },
              { value: "India", label: "India" },
            ]}
          />
          <SelectField
            label="State/Province"
            className="w-full bg-white"
            placeholder="Enter province or state (e.g., Punjab)"
            options={[
              { value: "Punjab", label: "Punjab" },
              { value: "Sindh", label: "Sindh" },
            ]}
          />
          <FormInputField
            name="city"
            label="City"
            placeholder="Enter city (e.g., Faisalabad)"
            type="text"
          />
          <FormInputField
            name="postalCode"
            label="ZIP/Postal Code"
            placeholder="Enter postal code (e.g., 38000)"
            type="text"
          />
          <FormInputField
            name="financeCode"
            label="Finance Code"
            placeholder="Enter finance/internal code (e.g., FIN-FSD-01)"
            type="text"
          />
          <FormInputField
            name="deliveryTime"
            label="Delivery Time"
            placeholder="Enter preferred delivery hour (e.g., 10:00 AM - 12:00 PM)"
            type="text"
          />
          <SelectField
            label="Assign Brand"
            className="w-full bg-white"
            placeholder="Select brand this outlet belongs to"
            options={[
              { value: "Karahi", label: "Karahi" },
              { value: "GrillExpress", label: "Grill Express" },
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
          Save Outlet
        </Button>
      </div>
    </FormProvider>
  );
};

export default OutletEditForm;
