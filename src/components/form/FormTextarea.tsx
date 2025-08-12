import { useController, useFormContext } from "react-hook-form";

interface FormTextareaProps {
  name: string;
  label: string;
  placeholder: string;
  rows?: number; // Optional, default to 4
  rules?: Record<string, any>;
  className?: string;
}

const FormTextarea = ({
  name,
  label,
  placeholder,
  rows = 4,
  rules,
  className,
  ...rest
}: FormTextareaProps) => {
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
    <div className={`space-y-3 flex flex-col ${className || ""}`}>
      <label className="text-lg text-gray-800">{label}</label>
      <textarea
        {...field}
        placeholder={placeholder}
        rows={rows}
        className={`resize-none border rounded-md p-2 w-full bg-white ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...rest}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormTextarea;
