/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "success" | "error" | "warning" | "info";

export interface TodayPurchaseActivitiesProps {
  name: string;
  des: string;
  icon: ReactNode;
  value?: string | number;
  statusText?: string;
  variant?: Variant;
  statusVariant?: Variant;
  className?: string;
}

const iconSchemes: Record<Variant, { bg: string; icon: string }> = {
  success: { bg: "bg-green-100", icon: "text-green-800" },
  error:   { bg: "bg-red-100",   icon: "text-red-800" },
  warning: { bg: "bg-yellow-100",icon: "text-yellow-800" },
  info:    { bg: "bg-blue-100",  icon: "text-blue-800" },
};

const statusSchemes: Record<Variant, { bg: string; text: string }> = {
  success: { bg: "bg-green-50", text: "text-green-600" },
  error:   { bg: "bg-red-50",   text: "text-red-600" },
  warning: { bg: "bg-yellow-50",text: "text-yellow-600" },
  info:    { bg: "bg-blue-50",  text: "text-blue-600" },
};

const TodayPurchaseActivities: React.FC<TodayPurchaseActivitiesProps> = ({
  name,
  des,
  icon,
  value,
  statusText,
  variant = "success",
  statusVariant = "success",
  className = "",
}) => {
  const { bg: iconBg, icon: iconColor } = iconSchemes[variant];
  const { bg: statusBg, text: statusTextColor } = statusSchemes[statusVariant];

  const coloredIcon = React.cloneElement(icon as ReactElement<any>, {
    className: `h-5 w-5 ${iconColor}`,
  });

  return (
    <div
      className={cn(
        "flex items-center justify-between bg-accent rounded-lg  px-4 py-3",
        className
      )}
    >
      {/* Left: icon + texts */}
      <div className="flex items-center space-x-3">
        <div className={cn(iconBg, "p-2 rounded-full")}>{coloredIcon}</div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{des}</p>
        </div>
      </div>

      {/* Right: value + status badge */}
      <div className="flex flex-col items-end space-y-1">
        {value != null && (
          <p className="text-sm font-semibold text-gray-900">{value}</p>
        )}
        {statusText && (
          <span
            className={cn(
              "px-2 py-0.5 text-xs font-medium rounded-full",
              statusBg,
              statusTextColor
            )}
          >
            {statusText}
          </span>
        )}
      </div>
    </div>
  );
};

export default TodayPurchaseActivities;
