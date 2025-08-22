// src/components/statistic/brand-manager/BrandManagerStatWithIconCard.tsx
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

export interface BrandsStatWithIconCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  key: number;
}

const BrandsStatWithIconCard = ({
  title,
  value,
  icon,
  key,
}: BrandsStatWithIconCardProps) => {
  return (
    <Card key={key} className="w-full gap-0">
      <CardContent>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm  text-supporting-black">
            {title}
            <p className="text-3xl font-medium text-gray-900">{value}</p>
          </CardTitle>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandsStatWithIconCard;
