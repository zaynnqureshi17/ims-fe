import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { StorageProvider } from "@/context/StorageContext";
import { Suspense } from "react";
import StorageFilter from "./StorageFilter";
import StorageListTable from "./StorageListTable";
import StoragePageHeader from "./StoragePageHeader";
import StorageTopBar from "./StorageTopBar";

const Storage = () => {
  return (
    <StorageProvider>
      <ProtectedLayoutWrapper topBar={<StorageTopBar />}>
        <StoragePageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <StorageFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <StorageListTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </StorageProvider>
  );
};

export default Storage;
