import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import StockCountViewActivity from "./StockCountViewActivity";
import StockCountViewHeader from "./StockCountViewHeader";
import StockCountViewMain from "./StockCountViewMain";
import StockCountViewTopBar from "./StockCountViewTopBar";

const StockCountView = ({ id }: { id: number }) => {
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
