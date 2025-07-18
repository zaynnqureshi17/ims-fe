// src/components/statistic/brand-manager/BrandManagerStatWithIconCard.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface BrandManagerStatWithIconCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  details?: string;
  subText?: string;
  iconBgClass?: string;
  iconClass?: string;
  detailsClass?: string;
  subTextClass?: string;
}

const BrandManagerStatWithIconCard = ({
  title,
  value,
  icon,
  details,
  subText,
  iconBgClass = "bg-gray-100",
  iconClass = "text-gray-600",
  detailsClass = "text-gray-500 ",
  subTextClass = "text-gray-400",
}: BrandManagerStatWithIconCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-0">
        <CardTitle className="text-sm font-semibold text-gray-700">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className={cn("p-2 rounded-md", iconBgClass)}>
            <span className={cn(iconClass)}>{icon}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className=" flex flex-col items-start">
        {details && <TypographyP className={detailsClass} text={details} />}
        {subText && <TypographyP className={subTextClass} text={subText} />}
      </CardFooter>
    </Card>
  );
};

export default BrandManagerStatWithIconCard;
