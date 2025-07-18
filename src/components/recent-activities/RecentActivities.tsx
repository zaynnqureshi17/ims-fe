/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from "react";

type Variant = "success" | "error" | "warning" | "info";

interface RecentActivitiesProps {
  name: string;
  des: string;
  icon: ReactElement;
  variant?: Variant;
  className?: string;
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({
  name,
  des,
  icon,
  variant = "info",
  className = "",
}) => {
  const schemes: Record<Variant, { bg: string; icon: string }> = {
    success: { bg: "bg-green-100", icon: "text-green-800" },
    error: { bg: "bg-red-100", icon: "text-red-800" },
    warning: { bg: "bg-yellow-100", icon: "text-yellow-800" },
    info: { bg: "bg-blue-100", icon: "text-blue-800" },
  };
  const { bg, icon: iconColor } = schemes[variant];

  // size + color for the icon
  const coloredIcon = React.cloneElement(icon as React.ReactElement<any>, {
    className: `h-5 w-5  ${iconColor}`,
  });

  return (
    <div
      className={`flex items-center space-x-2 p-4 rounded-md bg-accent text-black hover:bg-accent/90  ${className}`}
    >
      <div className={`${bg} p-2 rounded-full`}>{coloredIcon}</div>

      <div className="ml-3">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{des}</p>
      </div>
    </div>
  );
};

export default RecentActivities;
