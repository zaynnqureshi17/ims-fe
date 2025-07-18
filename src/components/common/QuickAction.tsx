// src/components/QuickAction.tsx
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export interface QuickActionProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  className?: string; // Optional prop for card background color
}

const QuickAction: React.FC<QuickActionProps> = ({
  icon,
  title,
  description,
  iconBgColor,
  className,
}) => {
  return (
    <Card className={`bg-accent border-none shadow-none rounded-md ${className}`}>
      <CardContent className="flex items-center space-x-4 ">
        <div className={`p-2  rounded-md text-gray-600 ${iconBgColor}`}>{icon}</div>
        <div>
          <h4 className="text-sm font-semibold text-gray-700">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAction;
