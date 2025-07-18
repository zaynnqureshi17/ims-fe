import { Input } from "../ui/input";
import { Label } from "../ui/label";
import React from "react";

interface FormInputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  rightIcon?: React.ReactNode; 
}

const FormInputField = ({ label, placeholder, type, rightIcon }: FormInputFieldProps) => {
  return (
    <div className="mb-4 w-full space-y-1">
      <Label className="mb-2">{label}</Label>
      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          className={rightIcon ? "pr-10" : ""}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-3 flex items-center text-muted-foreground cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInputField;
