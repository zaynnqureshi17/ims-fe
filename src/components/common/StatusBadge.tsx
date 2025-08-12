import React from "react";

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "active":
        return "text-accent-green bg-accent-green-light";
      case "inactive":
        return "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "blocked":
        return "text-red-600 bg-red-100";
      default:
        return "text-accent-orange bg-accent-orange-light";
    }
  };

  return (
    <span className={` rounded-full px-2 py-0.5 ${getStatusClasses(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
