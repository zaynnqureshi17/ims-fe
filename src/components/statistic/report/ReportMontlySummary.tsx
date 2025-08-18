// ReportMontlySummary.tsx
import GridWrapper from "@/components/wrapper/GridWrapper";
import React from "react";
export interface ReportSummaryStat {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}
interface Props {
  data: ReportSummaryStat[];
}

const ReportMontlySummary: React.FC<Props> = ({ data }) => {
  return (
    <GridWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center ">
          <div
            className={`relative p-2 rounded-full  inline-flex items-center justify-center`}
          >
            {item.icon}
          </div>
          <span className="mt-2 text-xl font-bold">{item.value}</span>
          <span className="text-sm text-gray-500">{item.title}</span>
        </div>
      ))}
    </GridWrapper>
  );
};

export default ReportMontlySummary;
