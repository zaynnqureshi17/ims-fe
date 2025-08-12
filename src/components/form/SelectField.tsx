// components/OutletSelect.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export interface SelectFieldProps {
  placeholder?: string;
  options: { value: string; label: string }[];
  onValueChange?: (value: string) => void;
  className?: string;
  value?: string;
  label?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  placeholder = "Select",
  options,
  onValueChange,
  className = "w-[240px] h-9 text-sm bg-white",
  value,
  label,
}) => {
  const internalValue = value === "" ? "__empty__" : value;

  return (
    <div className="flex flex-col space-y-1.5">
      {label && <label className="text-sm capitalize">{label}</label>}
      <Select
        value={internalValue}
        onValueChange={(val) => {
          onValueChange?.(val === "__empty__" ? "" : val);
        }}
      >
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {/* Default empty option */}
          <SelectItem value="__empty__">{placeholder}</SelectItem>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
