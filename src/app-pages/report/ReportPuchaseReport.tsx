import ReportPurchaseAnalyticsChart from "@/components/rechart/report/ReportPurchaseAnalyticsChart";
import GridWrapper from "@/components/wrapper/GridWrapper";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const ReportPurchaseReport = () => {
  return (
    <GridWrapper className="grid grid-cols-1 sm:grid-cols-2  gap-6">
      <SectionWrapper title="" className="bg-white">
        <ReportPurchaseAnalyticsChart />
      </SectionWrapper>
      <SectionWrapper title="" className="bg-white">
        <ReportPurchaseAnalyticsChart />
      </SectionWrapper>
    </GridWrapper>
  );
};

export default ReportPurchaseReport;
