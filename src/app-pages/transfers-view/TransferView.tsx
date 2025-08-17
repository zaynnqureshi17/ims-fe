"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import TransferViewActivity from "./TransferViewActivity";
import TransferViewMain from "./TransferViewMain";
import TransferViewTopBar from "./TransferViewTopBar";
import TransferViewPageHeader from "./TransferViewPageHeader";

const TransferView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<TransferViewTopBar />}>
      <TransferViewPageHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TransferViewMain />
        <TransferViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default TransferView;
