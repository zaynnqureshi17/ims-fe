// components/form/ControllerSelect.tsx
"use client";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = { value: string; label: string };

interface ControllerSelectProps {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  options: Option[];
  rules?: any;
  disabled?: boolean;
  className?: string;
}

const ControllerSelect = ({
  name,
  control,
  label,
  placeholder,
  options,
  rules,
  disabled,
  className,
}: ControllerSelectProps) => {
  return (
    <div className={className}>
      {label && (
        <label className="mb-2 block text-sm font-medium">{label}</label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            value={field.value ?? ""}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default ControllerSelect;
