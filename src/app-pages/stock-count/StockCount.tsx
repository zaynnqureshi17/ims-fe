import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import StockCountFilter from "./StockCountFilter";
import StockCountPageHeader from "./StockCountPageHeader";
import StorageListTable from "./StorageListTable";
import SuppliersTopBar from "./StockCountTopBar";
import StockCountTopBar from "./StockCountTopBar";

const StockCount = () => {
  return (
    <ProtectedLayoutWrapper topBar={<StockCountTopBar />}>
      <StockCountPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <StockCountFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <StorageListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default StockCount;
