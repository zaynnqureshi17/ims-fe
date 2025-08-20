"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import StockCountAddTopBar from "./StockCountAddTopBar";
import StockCountWizard from "./StockCountWizard";

const StockCountAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<StockCountAddTopBar />}>
      <StockCountWizard />
    </ProtectedLayoutWrapper>
  );
};

export default StockCountAdd;
