"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import ProductionViewPageHeader from "./ProductionViewPageHeader";
import ProductionViewTopBar from "./ProductionViewTopBar";
import ProductionViewActivity from "./TransferViewActivity";
import ProductionViewMain from "./TransferViewMain";

const ProductionView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<ProductionViewTopBar />}>
      <ProductionViewPageHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductionViewMain />
        <ProductionViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default ProductionView;
