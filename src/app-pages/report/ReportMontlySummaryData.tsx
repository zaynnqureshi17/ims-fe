// stats.ts
import {
  CreditCard,
  Percent,
  Repeat,
  ShoppingCart,
  Trash2,
  Utensils,
} from "lucide-react";

import ReportMontlySummary, {
  ReportSummaryStat,
} from "@/components/statistic/report/ReportMontlySummary";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const ReportMontlySummaryData = () => {
  return (
    <SectionWrapper title="Monthly-to-Date Summary" lineDrawn={false}>
      <ReportMontlySummary data={monthlySummaryStats} />
    </SectionWrapper>
  );
};

export default ReportMontlySummaryData;

export const monthlySummaryStats: ReportSummaryStat[] = [
  {
    title: "COGS",
    value: "32.4%",
    icon: <Percent className="text-yellow-500 w-7 h-7 font-extrabold" />,
  },
  {
    title: "Purchases",
    value: "$45,000",
    icon: <ShoppingCart className="text-blue-600 w-7 h-7 font-extrabold" />,
  },
  {
    title: "Petty Cash",
    value: "$1,240",
    icon: <CreditCard className="text-green-600 w-7 h-7 font-extrabold" />,
  },
  {
    title: "Wastage",
    value: "$560",
    icon: <Trash2 className="text-red-600 w-7 h-7 font-extrabold" />,
  },
  {
    title: "Transfers",
    value: 22,
    icon: <Repeat className="text-purple-600 w-7 h-7 font-extrabold" />,
  },
  {
    title: "Staff Meal",
    value: "$340",
    icon: <Utensils className="text-yellow-600 w-7 h-7 font-extrabold" />,
  },
];
