"use client";
import FormInputField from "@/components/form/FormInputField";
import FormInputPassword from "@/components/form/FormInputPassword";
import SelectField from "@/components/form/Select";
import UploadSingleImage from "@/components/form/UploadSingleImage";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { FormProvider, useForm } from "react-hook-form";

const UserAddForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <UploadSingleImage onFileUpload={(file) => console.log(file)} />

          <GridWrapper className="grid-cols-1 md:grid-cols-2 ">
            <FormInputField
              name="name"
              label="Full Name"
              placeholder="e.g., Ahsan Raza"
              type="text"
            />
            <FormInputField
              name="email"
              label="Email"
              placeholder="e.g., ahsan.raza@example.com"
              type="email"
            />
            <FormInputPassword
              name="password"
              label="Password"
              placeholder="Minimum 8 characters, include numbers and sybmbols"
            />
            <FormInputPassword
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Re-Type password"
            />
            <SelectField
              label="user Role"
              placeholder="Select Role (required for Outlet Manager/Staff)"
              options={[
                { value: "admin", label: "Admin" },
                { value: "finance", label: "Finance" },
                { value: "brandManager", label: "Brand Manager" },
                { value: "outletManager", label: "Outlet Manager" },
                { value: "outletStaff", label: "Outlet Staff" },
              ]}
              className="w-full bg-white"
              onValueChange={(value) => console.log(value)}
            />
            <SelectField
              label="Outlet "
              placeholder="Select outlet (required for Outlet Manager/Staff)"
              options={[
                { value: "outlet1", label: "Outlet 1" },
                { value: "outlet2", label: "Outlet 2" },
                { value: "outlet3", label: "Outlet 3" },
                // Replace with fetched outlets dynamically
              ]}
              className="w-full bg-white  "
              onValueChange={(value) => console.log(value)}
            />
            <SelectField
              label="Department"
              placeholder="e.g., Kitchen, Bar, Floor (required for Outlet Staff)"
              options={[
                { value: "kitchen", label: "Kitchen" },
                { value: "bar", label: "Bar" },
                { value: "floor", label: "Floor" },
              ]}
              className="w-full bg-white  "
              onValueChange={(value) => console.log(value)}
            />
            <SelectField
              label="Status"
              placeholder="Select Status"
              options={[
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              className="w-full bg-white  "
              onValueChange={(value) => console.log(value)}
            />
          </GridWrapper>
        </div>
        <div className="flex justify-end items-center mt-4 gap-6">
          <Button type="button" variant="cancel" className="w-fit">
            Cancel
          </Button>
          <Button type="submit" variant="secondary" className="w-fit">
            Save
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

export default UserAddForm;
