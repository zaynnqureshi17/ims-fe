import GridWrapper from "@/components/wrapper/GridWrapper";
import OutletManagerStuffMeal from "./OutletManagerStuffMeal";
import OutletManagerWasteSummary from "./OutletManagerWasteSummary";

const OutletManagerStuffMealWaste = () => {
  return (
    <GridWrapper className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
      <OutletManagerStuffMeal />
      <OutletManagerWasteSummary />
    </GridWrapper>
  );
};

export default OutletManagerStuffMealWaste;
