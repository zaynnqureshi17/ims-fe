import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import WasteAddItem from "./WasteAddItem";
import WasteAddListTable from "./WasteAddListTable";
import WasteAddPageHeader from "./WasteAddPageHeader";
import WasteAddTopBar from "./WasteAddTopBar";
import WasteCostImpact from "./WasteCostImpact";

const WasteAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<WasteAddTopBar />}>
      <WasteAddPageHeader />
      <WasteAddItem />
      <WasteCostImpact />
      <Suspense fallback={<div>Loading table...</div>}>
        <WasteAddListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default WasteAdd;
