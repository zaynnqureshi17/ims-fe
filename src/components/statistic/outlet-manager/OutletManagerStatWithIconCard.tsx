import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface OutletManagerStatWithIconCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBgColor: string;
  changeText: string;
  changeColorClass: string;
  changeBgClass: string;
}

const OutletManagerStatWithIconCard = ({
  value,
  title,
  icon,
  iconBgColor = "bg-blue-100",
  changeText,
  changeColorClass = "text-green-600",
  changeBgClass = "bg-green-50",
}: OutletManagerStatWithIconCardProps) => {
  return (
    <Card className="relative w-full">
      <CardContent className="px-4">
        <div className="flex items-center justify-between">
            <div className={cn("p-2 rounded-lg inline-flex", iconBgColor)}>
              {icon}
            </div>
          <div
            className={cn(
              " px-2 py-1 rounded-full text-xs font-medium",
              changeBgClass,
              changeColorClass
            )}
          >
            {changeText}
          </div>
        </div>

        <p className="mt-4 text-2xl font-bold text-gray-900">{value}</p>
        <p className="mt-1 text-sm text-gray-500">{title}</p>
      </CardContent>
    </Card>
  );
};

export default OutletManagerStatWithIconCard;
