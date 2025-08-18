"use client";
import ReportPurchaseAnalyticsChart from "@/components/rechart/report/ReportPurchaseAnalyticsChart";
import ReportAnalyticTable from "@/components/table/report/ReportAnalyticTable";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

export type IReport = {
  report_id: string;
  ingredient: string;
  avgPrice: string;
  lowestPrice: string;
  highestPrice: string;
  supplier: string;
};

const reportData: IReport[] = [
  {
    report_id: "1",
    ingredient: "Chicken Breast",
    avgPrice: "$8.50",
    lowestPrice: "$7.20",
    highestPrice: "$9.80",
    supplier: "Fresh Foods Ltd",
  },
  {
    report_id: "2",
    ingredient: "Tomatoes",
    avgPrice: "$8.50",
    lowestPrice: "$7.20",
    highestPrice: "$9.80",
    supplier: "Fresh Foods Ltd",
  },
];
const ReportPurchaseAnalytics = () => {
  return (
    <SectionWrapper title="Purchase Analytics - Price Difference per Ingredient">
      <ReportPurchaseAnalyticsChart />
      <ReportAnalyticTable
        report={reportData}
        headtable={[
          "Ingredient",
          "Avg Price",
          "Lowest Price",
          "Highest Price",
          "Supplier",
        ]}
      />
    </SectionWrapper>
  );
};

export default ReportPurchaseAnalytics;
