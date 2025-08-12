"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface ControllerCheckboxGroupProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  options: { value: string; label: string }[];
  rules?: any;
}

export default function ControllerCheckboxGroup<
  TFieldValues extends FieldValues,
>({
  name,
  control,
  label,
  options,
  rules,
}: ControllerCheckboxGroupProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-2">
          <span className="font-medium">{label}</span>
          <div className="flex flex-col gap-1">
            {options.map((option) => {
              const isChecked = Array.isArray(field.value)
                ? field.value.includes(option.value)
                : false;

              return (
                <label
                  key={option.value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 border rounded"
                    checked={isChecked}
                    onChange={(e) => {
                      if (e.target.checked) {
                        field.onChange([...(field.value || []), option.value]);
                      } else {
                        field.onChange(
                          (field.value || []).filter(
                            (val: string) => val !== option.value,
                          ),
                        );
                      }
                    }}
                  />
                  <span>{option.label}</span>
                </label>
              );
            })}
          </div>
          {fieldState.error && (
            <p className="text-red-600 text-sm">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
}
