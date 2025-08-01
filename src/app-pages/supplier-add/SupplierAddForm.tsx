"use client";
import FormInputField from "@/components/form/FormInputField";
import SelectField from "@/components/form/Select";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { FormProvider, useForm } from "react-hook-form";

type SupplierFormValues = {
  category: string;
  name: string;
  registrationCode: string;
  pic: string;
  contact: string;
  email: string;
  supplierCode: string;
  financeCode: string;
  status: string;
  serviceAreas: string[];
};

const serviceAreas = [
  { value: "KV", label: "KV – Kuala Lumpur" },
  { value: "SU", label: "SU – Subang" },
  { value: "PN", label: "PN – Penang" },
];

const SupplierAddForm = () => {
  const methods = useForm<SupplierFormValues>({
    defaultValues: {
      category: "",
      name: "",
      registrationCode: "",
      pic: "",
      contact: "",
      email: "",
      supplierCode: "",
      financeCode: "",
      status: "Active",
      serviceAreas: [],
    },
  });
  const { handleSubmit, setValue } = methods;

  const onSubmit = (data: SupplierFormValues) => {
    console.log("Form data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6">
            <GridWrapper className="grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category */}
              <SelectField
                label="Category"
                placeholder="Select Category"
                options={[
                  { value: "admin", label: "Admin" },
                  { value: "finance", label: "Finance" },
                  { value: "brandManager", label: "Brand Manager" },
                  { value: "outletManager", label: "Outlet Manager" },
                  { value: "outletStaff", label: "Outlet Staff" },
                ]}
                className="w-full bg-white"
                onValueChange={(val) => setValue("category", val)}
              />

              {/* Company Name */}
              <FormInputField
                name="name"
                label="Company Name"
                placeholder="Enter Company Name"
                type="text"
              />

              {/* Registration Code */}
              <FormInputField
                name="registrationCode"
                label="Registration Code"
                placeholder="Company Registration Number"
                type="text"
              />

              {/* Person in Charge */}
              <FormInputField
                name="pic"
                label="Person in Charge (PIC)"
                placeholder="Contact Person's Full Name"
                type="text"
              />

              {/* Contact */}
              <FormInputField
                name="contact"
                label="Contact"
                placeholder="e.g., +92 300 1234567"
                type="text"
              />

              {/* Email */}
              <FormInputField
                name="email"
                label="Email"
                placeholder="supplier@company.com"
                type="email"
              />

              {/* Supplier Code */}
              <SelectField
                label="Supplier Code"
                placeholder="Auto-generated (Editable)"
                options={[]}
                className="w-full bg-white"
                onValueChange={(val) => setValue("supplierCode", val)}
              />

              {/* Finance Code */}
              <FormInputField
                name="financeCode"
                label="Finance Code"
                placeholder="Financial Module Mapping Code"
                type="text"
              />

              {/* Status */}
              <SelectField
                label="Status"
                placeholder="Select Status"
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Inactive", label: "Inactive" },
                ]}
                className="w-full bg-white"
                onValueChange={(val) => setValue("status", val)}
              />

              {/* Service Area */}
              <div className="flex flex-col">
                <span className="mb-2 font-medium">Service Area</span>
                <div className="flex flex-col space-y-2">
                  {serviceAreas.map((area) => (
                    <label
                      key={area.value}
                      className="inline-flex items-center gap-2"
                    >
                      <input type="checkbox" value={area.value} />
                      <span>{area.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </GridWrapper>
          </div>

          {/* Buttons */}
          <div className="flex justify-end items-center mt-4 gap-6">
            <Button type="button" variant="cancel" className="w-fit">
              Cancel
            </Button>
            <Button type="submit" variant="secondary" className="w-fit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SupplierAddForm;
