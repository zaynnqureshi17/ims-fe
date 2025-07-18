import { TypographyP } from "@/components/ui/text";
import { cn } from "@/lib/utils"; // optional for merging classNames
import { ReactNode } from "react";

interface FinanceManagerStatWithIconCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  shortDetails: string;

  iconBgColor?: string;
  iconColor?: string;
  shortTextColor?: string;
}

const FinanceManagerStatWithIconCard = ({
  title,
  value,
  icon,
  shortDetails,
  iconBgColor = "bg-gray-100",
  iconColor = "text-gray-600",
  shortTextColor = "text-gray-500",
}: FinanceManagerStatWithIconCardProps) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 w-full">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      <div className="flex items-center justify-between mt-1">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <div className={cn("p-2 rounded-md", iconBgColor)}>
          <span className={cn(iconColor)}>{icon}</span>
        </div>
      </div>
      <TypographyP className={shortTextColor} text={shortDetails} />
    </div>
  );
};

export default FinanceManagerStatWithIconCard;
