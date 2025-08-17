import React from "react";

type ProductionStatus = "completed" | "pending" | "failed" | "draft";

const ProductionBadge = ({ status }: { status: ProductionStatus | string }) => {
  const normalized = (status || "").toLowerCase() as ProductionStatus;

  const getStatusClasses = (s: ProductionStatus) => {
    switch (s) {
      case "completed":
        return "text-accent-green bg-accent-green-light";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "failed":
        return "text-red-600 bg-red-100";
      case "draft":
      default:
        return "text-accent-orange bg-accent-orange-light";
    }
  };

  const label = normalized.charAt(0).toUpperCase() + normalized.slice(1);

  return (
    <span
      className={`rounded-full px-2 py-0.5 ${getStatusClasses(normalized)}`}
    >
      {label}
    </span>
  );
};

export default ProductionBadge;
