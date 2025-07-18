import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface StuffStatWithIconCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  changeText?: string;
  changeColorClass?: string;
  changeBgClass?: string;
}

const StuffStatWithIconCard = ({
  title,
  value,
  icon,
  iconBgColor = "bg-gray-100",
  iconColor = "text-gray-600",
  changeText = "",
  changeColorClass = "text-gray-600",
  changeBgClass = "bg-gray-50",
}: StuffStatWithIconCardProps) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 w-full">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>

      <div className="flex items-center justify-between my-2">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <div className={cn("p-2 rounded-md", iconBgColor)}>
          <span className={cn(iconColor)}>{icon}</span>
        </div>
      </div>
      <div
        className={cn(
          " px-2 py-1 rounded-full text-xs font-medium w-fit",
          changeBgClass,
          changeColorClass
        )}
      >
        {changeText}
      </div>
    </div>
  );
};

export default StuffStatWithIconCard;
