import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import WasteFilter from "./WasteFilter";
import WastePageHeader from "./WastePageHeader";
import WasteStat from "./WasteStat";
import WasteListTable from "./WasteListTable";
import WasteTopBar from "./WasteTopBar";

const Waste = () => {
  return (
    <ProtectedLayoutWrapper topBar={<WasteTopBar />}>
      <WastePageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <WasteFilter />
      </Suspense>
      <WasteStat />
      <Suspense fallback={<div>Loading table...</div>}>
        <WasteListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Waste;
