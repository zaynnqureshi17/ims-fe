import FinanceManagerDashboardLinerChart from "@/components/rechart/finance-manager/FinanceManagerDashboardLinerChart";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const FinanceManagerSalesPurchase = () => {
  return (
    <SectionWrapper title="Sales vs Purchase Trend" lineDrawn={false}>
      <FinanceManagerDashboardLinerChart />;
    </SectionWrapper>
  );
};

export default FinanceManagerSalesPurchase;
