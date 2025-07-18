import BrandManagerDashboardLinerChart from "@/components/rechart/brand-manager/BrandManagerDashboardLinerChart";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const BrandManagerCosTread = () => {
  return (
    <SectionWrapper title="COGS Treands" lineDrawn={false}>
      <BrandManagerDashboardLinerChart />
    </SectionWrapper>
  );
};

export default BrandManagerCosTread;
