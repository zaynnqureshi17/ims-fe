import React from "react";

interface FormTextareaProps {
  label: string;
  placeholder: string;
  rows?: number; // Optional, default to 4 if not provided
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  placeholder,
  rows = 4,
}) => {
  return (
    <div className="space-y-3 flex flex-col">
      <label className="text-lg text-gray-800">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        className="resize-none border border-gray-300 bg-white rounded-md p-2 w-full"
      />
    </div>
  );
};

export default FormTextarea;
