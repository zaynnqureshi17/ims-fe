// components/OutletSelect.tsx
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export interface SelectFieldProps {
  placeholder?: string;
  options: { value: string; label: string }[];
  onValueChange?: (value: string) => void;
  className?: string;
  value?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  placeholder = "Select",
  options,
  onValueChange,
  className = "w-[240px] h-9 text-sm bg-white",
  value,
}) => (
  <Select value={value} onValueChange={onValueChange}>
    <SelectTrigger className={className}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {options.map((opt) => (
        <SelectItem key={opt.value} value={opt.value}>
          {opt.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default SelectField;
