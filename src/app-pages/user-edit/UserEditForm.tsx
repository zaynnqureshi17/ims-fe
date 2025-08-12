"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import FormInputPassword from "@/components/form/FormInputPassword";
import UploadSingleImage from "@/components/form/UploadSingleImage";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { FormProvider, useForm } from "react-hook-form";

import { useUpdateUser } from "@/queries/users/useUpdateUser";
import { UserEditFormProps } from "@/utils/types/common.type";
import { toast } from "react-toastify";

const UserEditForm = ({
  userData,
  roleOptions,
  outletOptions,
  departmentOptions,
}: UserEditFormProps) => {
  const { mutate: onUpdateUser, status: updateStatus } = useUpdateUser();
  const {
    user_id,
    name,
    email,
    password,
    department_id,
    role_id,
    outlet_id,
    status,
    user_image_url,
  } = userData;

  const methods = useForm({
    defaultValues: {
      name: name || "",
      email: email || "",
      password: password || "",
      confirmPassword: password || "",
      role_id: role_id || "",
      outlet_id: outlet_id || "",
      department_id: department_id || "",
      status: status || "",
      user_image_url: user_image_url || null,
    },
  });

  const { handleSubmit, setValue, watch, reset, control } = methods;
  const loading = updateStatus === "pending";

  const onSubmit = (data: any) => {
    onUpdateUser(
      { body: data, id: user_id },
      {
        onSuccess: () => {
          toast.success("User updated successfully");
        },
      },
    );
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper disabled={loading} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <UploadSingleImage name="user_image_url" label="Profile Picture" />

            <GridWrapper className="grid-cols-1 md:grid-cols-2">
              <FormInputField
                name="name"
                label="Full Name"
                placeholder="e.g., Ahsan Raza"
                type="text"
                rules={{ required: "Full name is required" }}
              />
              <FormInputField
                name="email"
                label="Email"
                placeholder="e.g., ahsan.raza@example.com"
                type="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                }}
              />
              <FormInputPassword
                name="password"
                label="Password"
                placeholder="Minimum 8 characters, include numbers and symbols"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
              />
              <FormInputPassword
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Re-type password"
                rules={{
                  required: "Confirm password is required",
                  validate: (value: string) =>
                    value === watch("password") || "Passwords do not match",
                }}
              />

              <ControllerSelect
                name="role_id"
                control={control}
                label="Role"
                placeholder="Select Role"
                options={roleOptions}
                rules={{ required: "Role is required" }}
              />

              <ControllerSelect
                name="department_id"
                control={control}
                label="Department"
                placeholder="Select Department"
                options={departmentOptions}
                rules={{ required: "Department is required" }}
              />

              <ControllerSelect
                name="outlet_id"
                control={control}
                label="Outlet"
                placeholder="Select Outlet"
                options={outletOptions}
                rules={{ required: "Outlet is required" }}
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

export default UserEditForm;
