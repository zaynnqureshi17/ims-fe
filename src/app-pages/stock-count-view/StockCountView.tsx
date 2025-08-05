import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import StockCountViewTopBar from "./StockCountViewTopBar";
import StockCountViewHeader from "./StockCountViewHeader";
import StockCountViewMain from "./StockCountViewMain";
import StockCountViewActivity from "./StockCountViewActivity";

const StockCountView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<StockCountViewTopBar />}>
      <StockCountViewHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StockCountViewMain />
        <StockCountViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default StockCountView;
