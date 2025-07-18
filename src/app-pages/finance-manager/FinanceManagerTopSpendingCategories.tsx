import FinanceManagerLabelWithStat from "@/components/statistic/finance-manager/FinanceManagerLabelWithStat";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import React from "react";

interface Category {
  label: string;
  value: string | number;
  colorClass: string;
}

const FinanceManagerTopSpendingCategories: React.FC = () => {
  return (
    <SectionWrapper title="Top Spending Categories" lineDrawn={false}>
      {topSpendingCategories.map((cat) => (
        <FinanceManagerLabelWithStat
          key={cat.label}
          label={cat.label}
          value={cat.value}
          colorClass={cat.colorClass}
        />
      ))}
    </SectionWrapper>
  );
};

export default FinanceManagerTopSpendingCategories;

const topSpendingCategories: Category[] = [
  { label: "Fresh Produce", value: "$4,230", colorClass: "bg-blue-500" },
  { label: "Dairy Products", value: "$2,890", colorClass: "bg-green-500" },
  { label: "Meat & Poultry", value: "$2,450", colorClass: "bg-yellow-500" },
  { label: "Beverages", value: "$1,680", colorClass: "bg-purple-500" },
];
