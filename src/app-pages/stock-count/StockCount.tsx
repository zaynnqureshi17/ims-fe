import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { StockProvider } from "@/context/StockCountContext";
import { Suspense } from "react";
import StockCountFilter from "./StockCountFilter";
import StockCountPageHeader from "./StockCountPageHeader";
import StockCountTopBar from "./StockCountTopBar";
import StockCountListTable from "./StockCountListTable";

const StockCount = () => {
  return (
    <StockProvider>
      <ProtectedLayoutWrapper topBar={<StockCountTopBar />}>
        <StockCountPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <StockCountFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <StockCountListTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </StockProvider>
  );
};

export default StockCount;
