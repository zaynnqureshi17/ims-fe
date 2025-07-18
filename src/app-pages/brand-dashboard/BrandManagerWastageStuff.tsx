import GridWrapper from "@/components/wrapper/GridWrapper";
import BrandManagerStaffMeal from "./BrandManagerStaffMeal";
import BrandManagerWastageByOutlet from "./BrandManagerWastageByOutlet";

const BrandManagerWastageStuff = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <BrandManagerWastageByOutlet />
      <BrandManagerStaffMeal />
    </GridWrapper>
  );
};

export default BrandManagerWastageStuff;
