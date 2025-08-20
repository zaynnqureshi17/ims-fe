import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import StockCountFilter from "./StockCountFilter";
import StockCountListTable from "./StockCountListTable";
import StockCountPageHeader from "./StockCountPageHeader";
import StockCountTopBar from "./StockCountTopBar";

const StockCount = () => {
  return (
    <ProtectedLayoutWrapper topBar={<StockCountTopBar />}>
      <StockCountPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <StockCountFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <StockCountListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default StockCount;
