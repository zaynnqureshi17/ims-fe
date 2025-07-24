import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import OutletListTable from "./OutletListTable";
import OutletsFilter from "./OutletsFilter";
import OutletsPageHeader from "./OutletsPageHeader";
import OutletsTopBar from "./OutletsTopBar";

const Outlets = () => {
  return (
    <ProtectedLayoutWrapper topBar={<OutletsTopBar />}>
      <OutletsPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <OutletsFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <OutletListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Outlets;
