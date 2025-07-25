// src/components/statistic/brand-manager/BrandManagerStatWithIconCard.tsx
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

export interface StatWithIconCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  classNameTitle?: string;
  classNameValue?: string;
}

const StatWithIconCard = ({
  title,
  value,
  icon,
  classNameTitle = "text-sm font-light text-supporting-black",
  classNameValue = "text-2xl font-medium text-gray-900",
}: StatWithIconCardProps) => {
  return (
    <Card className="w-full gap-0">
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className={classNameTitle}>{title} </CardTitle>
            <p className={classNameValue}>{value}</p>
          </div>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatWithIconCard;
