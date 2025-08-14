"use client";

import { Control, Controller, FieldValues } from "react-hook-form";

import { Path } from "react-hook-form";

interface ControllerSelectProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  rules?: any;
}

export default function ControllerSelect<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  options,
  placeholder = "Select",
  rules,
}: ControllerSelectProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <label className="mb-1 text-sm ">{label}</label>

          <select
            {...field}
            className="border rounded-md bg-white text-sm p-2  mb-2"
            value={field.value || ""}
            onChange={(e) => field.onChange(e.target.value)}
          >
            <option value="">{placeholder}</option>

            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {fieldState.error && (
            <p className="text-red-600 mt-1 text-sm">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
