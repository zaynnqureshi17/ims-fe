import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import PurchaseOrderBar from "./RecipesTopBar";
import PurchaseOrderFilter from "./RecipesFilter";
import PurchaseOrderPageHeader from "./RecipesPageHeader";
import PurchaseOrderTable from "./RecipesTableList";
import RecipesTableList from "./RecipesTableList";

const PurchaseOrder = () => {
  return (
    <ProtectedLayoutWrapper topBar={<PurchaseOrderBar />}>
      <PurchaseOrderPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <PurchaseOrderFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <RecipesTableList />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default PurchaseOrder;
