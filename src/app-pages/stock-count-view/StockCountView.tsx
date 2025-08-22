import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import StockCountViewActivity from "./StockCountViewActivity";
import StockCountViewMain from "./StockCountViewMain";
import StockCountViewPageHeader from "./StockCountViewPageHeader";
import StockCountViewTopBar from "./StockCountViewTopBar";

const StockCountView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<StockCountViewTopBar />}>
      <StockCountViewPageHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StockCountViewMain />
        <StockCountViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default StockCountView;
