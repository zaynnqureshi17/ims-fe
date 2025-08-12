import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useController, useFormContext } from "react-hook-form";

interface FormInputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder?: string;
  rules?: Record<string, any>;
}

const FormInputPassword: React.FC<FormInputPasswordProps> = ({
  name,
  label,
  placeholder,
  rules,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="space-y-1 relative mb-4">
      <Label>{label}</Label>
      <div className="relative">
        <Input
          {...field}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`pr-10 bg-white ${error ? "border-red-500" : ""}`}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-2 flex items-center text-muted-foreground"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormInputPassword;
