// stats.ts
import {
  CreditCard,
  Percent,
  Repeat,
  ShoppingCart,
  Trash2,
  Utensils,
} from "lucide-react";

import FinanceManagerMontlySummary, {
  SummaryStat,
} from "@/components/statistic/finance-manager/FinanceManagerMontlySummary";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const FinanceManagerMontlySummaryData = () => {
  return (
    <SectionWrapper title="Monthly-to-Date Summary" lineDrawn={false}>
      <FinanceManagerMontlySummary data={monthlySummaryStats} />
    </SectionWrapper>
  );
};

export default FinanceManagerMontlySummaryData;

export const monthlySummaryStats: SummaryStat[] = [
  {
    title: "COGS",
    value: "32.4%",
    icon: <Percent className="text-yellow-500 w-7 h-7 font-extrabold" />,
    change: "up",
    changeColor: "text-green-500",
  },
  {
    title: "Purchases",
    value: "$45,000",
    icon: <ShoppingCart className="text-blue-600 w-7 h-7 font-extrabold" />,
    change: "up",
    changeColor: "text-green-500",
  },
  {
    title: "Petty Cash",
    value: "$1,240",
    icon: <CreditCard className="text-green-600 w-7 h-7 font-extrabold" />,
    change: "down",
    changeColor: "text-red-500",
  },
  {
    title: "Wastage",
    value: "$560",
    icon: <Trash2 className="text-red-600 w-7 h-7 font-extrabold" />,
    change: "up",
    changeColor: "text-green-500",
  },
  {
    title: "Transfers",
    value: 22,
    icon: <Repeat className="text-purple-600 w-7 h-7 font-extrabold" />,
    change: "up",
    changeColor: "text-green-500",
  },
  {
    title: "Staff Meal",
    value: "$340",
    icon: <Utensils className="text-yellow-600 w-7 h-7 font-extrabold" />,
    change: "up",
    changeColor: "text-green-500",
  },
];
