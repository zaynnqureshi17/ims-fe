// components/FormattedDate.tsx
import React from "react";

interface FormattedDateProps {
  date: string | number | Date; // Accepts ISO string, timestamp, or Date object
}

const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  if (!date) return null;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return <span>{formattedDate}</span>;
};

export default FormattedDate;
