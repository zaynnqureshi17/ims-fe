import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { WasteProvider } from "@/context/WasteContext";
import { Suspense } from "react";
import WasteFilter from "./WasteFilter";
import WasteListTable from "./WasteListTable";
import WastePageHeader from "./WastePageHeader";
import WasteStat from "./WasteStat";
import WasteTopBar from "./WasteTopBar";

const Waste = () => {
  return (
    <WasteProvider>
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
    </WasteProvider>
  );
};

export default Waste;
