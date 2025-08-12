import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  rules?: Record<string, any>;
  className?: string;
  rightIcon?: React.ReactNode;
}

const FormInputField = ({
  label,
  placeholder,
  type,
  rightIcon,
  name,
  rules,
  className,
  ...rest
}: FormInputFieldProps) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className={`mb-4 w-full space-y-3 ${className}`}>
      <Label>{label}</Label>
      <div className="relative">
        <Input
          {...field}
          type={type}
          placeholder={placeholder}
          className={`bg-white ${rightIcon ? "pr-10" : ""} ${
            error ? "border-red-500" : ""
          }`}
          {...rest}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-3 flex items-center text-muted-foreground cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormInputField;
