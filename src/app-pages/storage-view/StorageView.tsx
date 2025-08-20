import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import StorageViewHeader from "./StockCountViewHeader";
import StorageViewActivity from "./StorageViewActivity";
import StorageViewMain from "./StorageViewMain";
import StorageViewTopBar from "./StorageViewTopBar";

const StorageView = ({ id }: { id: number }) => {
  return (
    <ProtectedLayoutWrapper topBar={<StorageViewTopBar />}>
      <StorageViewHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StorageViewMain />
        <StorageViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default StorageView;
