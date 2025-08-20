import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { StockProvider } from "@/context/StockCountContext";
import { Suspense } from "react";
import StorageFilter from "./StorageFilter";
import StorageListTable from "./StorageListTable";
import StoragePageHeader from "./StoragePageHeader";
import StorageTopBar from "./StorageTopBar";

const Storage = () => {
  return (
    <StockProvider>
      <ProtectedLayoutWrapper topBar={<StorageTopBar />}>
        <StoragePageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <StorageFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <StorageListTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </StockProvider>
  );
};

export default Storage;
