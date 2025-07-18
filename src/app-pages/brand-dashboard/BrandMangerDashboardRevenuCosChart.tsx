import GridWrapper from "@/components/wrapper/GridWrapper";
import BrandManagerCosTread from "./BrandManagerCosTread";
import BrandManagerRevenueByOutlet from "./BrandManagerRevenueByOutlet";

const BrandMangerDashboardRevenuCosChart = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <BrandManagerRevenueByOutlet />
      <BrandManagerCosTread />
    </GridWrapper>
  );
};

export default BrandMangerDashboardRevenuCosChart;
