import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import StorageFilter from "./StorageFilter";
import StorageListTable from "./StorageListTable";
import StoragePageHeader from "./StoragePageHeader";
import StorageTopBar from "./StorageTopBar";

const Storage = () => {
  return (
    <ProtectedLayoutWrapper topBar={<StorageTopBar />}>
      <StoragePageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <StorageFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <StorageListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Storage;
