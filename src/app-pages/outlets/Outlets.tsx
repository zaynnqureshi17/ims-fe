import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { OutletProvider } from "@/context/outlet.context";
import { Suspense } from "react";
import OutletListTable from "./OutletListTable";
import OutletsFilter from "./OutletsFilter";
import OutletsPageHeader from "./OutletsPageHeader";
import OutletsTopBar from "./OutletsTopBar";

const Outlets = () => {
  return (
    <OutletProvider>
      <ProtectedLayoutWrapper topBar={<OutletsTopBar />}>
        <OutletsPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <OutletsFilter />
        </Suspense>
        <Suspense fallback={<div>Loading tables...</div>}>
          <OutletListTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </OutletProvider>
  );
};

export default Outlets;
