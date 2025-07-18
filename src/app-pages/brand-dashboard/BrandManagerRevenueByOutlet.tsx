import BrandManagerBarChart from "@/components/rechart/brand-manager/BrandManagerBarChart";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const BrandManagerRevenueByOutlet = () => {
  return (
    <SectionWrapper title="Revenue by Outlet" lineDrawn={false}>
      <BrandManagerBarChart />
    </SectionWrapper>
  );
};

export default BrandManagerRevenueByOutlet;
