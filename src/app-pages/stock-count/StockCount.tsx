import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import StockCountFilter from "./StockCountFilter";
import StockCountPageHeader from "./StockCountPageHeader";
import StockCountTopBar from "./StockCountTopBar";
import StorageListTable from "./StorageListTable";
import { StockProvider } from "@/context/stockCount.context";

const StockCount = () => {
  return (
    <StockProvider>
      <ProtectedLayoutWrapper topBar={<StockCountTopBar />}>
        <StockCountPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <StockCountFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <StorageListTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </StockProvider>
  );
};

export default StockCount;
