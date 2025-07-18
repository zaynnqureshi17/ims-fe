// FinanceManagerMontlySummary.tsx
import GridWrapper from "@/components/wrapper/GridWrapper";
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";
export interface SummaryStat {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change: "up" | "down";
  changeColor: string;
}
interface Props {
  data: SummaryStat[];
}

const FinanceManagerMontlySummary: React.FC<Props> = ({ data }) => {
  return (
    <GridWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center ">
          <div
            className={`relative p-2 rounded-full  inline-flex items-center justify-center`}
          >
            {item.icon}
            <span className="absolute -top-1 -right-1">
              {item.change === "up" ? (
                <ArrowUp className={`w-3 h-3 ${item.changeColor}`} />
              ) : (
                <ArrowDown className={`w-3 h-3 ${item.changeColor}`} />
              )}
            </span>
          </div>
          <span className="mt-2 text-xl font-bold">{item.value}</span>
          <span className="text-sm text-gray-500">{item.title}</span>
        </div>
      ))}
    </GridWrapper>
  );
};

export default FinanceManagerMontlySummary;
