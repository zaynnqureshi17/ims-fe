import GridWrapper from "@/components/wrapper/GridWrapper";
import FinanceManagerSalesPurchase from "./FinanceManagerSalesPurchase";
import FinanceManagerVarianceCostSummary from "./FinanceManagerVarianceCostSummary";

const FinanceManagerSalesVarianceChart = () => {
  return (
    <GridWrapper className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FinanceManagerSalesPurchase />
      <FinanceManagerVarianceCostSummary />
    </GridWrapper>
  );
};

export default FinanceManagerSalesVarianceChart;
