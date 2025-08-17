import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import ProductionFilter from "./ProductionFilter";
import ProductionPageHeader from "./ProductionPageHeader";
import ProductionsTopBar from "./ProductionsTopBar";
import TransfersTableList from "./ProductionTableList";
import ProductionTableList from "./ProductionTableList";

const Production = () => {
  return (
    <ProtectedLayoutWrapper topBar={<ProductionsTopBar />}>
      <ProductionPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <ProductionFilter />
      </Suspense>
      <Suspense fallback={<div>Loading table...</div>}>
        <ProductionTableList />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Production;
