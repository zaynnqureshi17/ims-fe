import BrandManagerWastagePieChart from "@/components/rechart/brand-manager/BrandManagerWastagePieChart";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const BrandManagerWastageByOutlet = () => {
  return (
    <SectionWrapper title="Wastage by Outlet" lineDrawn={false}>
      <BrandManagerWastagePieChart />
    </SectionWrapper>
  );
};

export default BrandManagerWastageByOutlet;
