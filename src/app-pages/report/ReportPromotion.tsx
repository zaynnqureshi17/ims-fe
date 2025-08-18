import ReportPurchaseAnalyticsChart from "@/components/rechart/report/ReportPurchaseAnalyticsChart";
import GridWrapper from "@/components/wrapper/GridWrapper";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const ReportPromotion = () => {
  return (
    <GridWrapper className="grid grid-cols-1 sm:grid-cols-2  gap-6">
      <SectionWrapper title="Promo vs Non-Promo Sales" className="bg-white">
        <ReportPurchaseAnalyticsChart />
      </SectionWrapper>
      <SectionWrapper title="Promo vs Non-Promo Profit" className="bg-white">
        <ReportPurchaseAnalyticsChart />
      </SectionWrapper>
    </GridWrapper>
  );
};

export default ReportPromotion;
