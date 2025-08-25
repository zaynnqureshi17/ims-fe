import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { POProvider } from "@/context/POContext";
import { Suspense } from "react";
import PurchaseOrderBar from "./PurchaseOrderBar";
import PurchaseOrderFilter from "./PurchaseOrderFilter";
import PurchaseOrderPageHeader from "./PurchaseOrderPageHeader";
import PurchaseOrderTable from "./PurchaseOrderTableList";

const PurchaseOrder = () => {
  return (
    <POProvider>
      <ProtectedLayoutWrapper topBar={<PurchaseOrderBar />}>
        <PurchaseOrderPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <PurchaseOrderFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <PurchaseOrderTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </POProvider>
  );
};

export default PurchaseOrder;
