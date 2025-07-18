import BrandManagerStuffMealBarChart from "@/components/rechart/brand-manager/BrandManagerStuffMealBarChart";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const BrandManagerStaffMeal = () => {
  return (
    <SectionWrapper title="Stuff Meal Cost" lineDrawn={false}>
      <BrandManagerStuffMealBarChart />
    </SectionWrapper>
  );
};

export default BrandManagerStaffMeal;
