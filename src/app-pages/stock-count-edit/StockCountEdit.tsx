"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import { useGetStockCountById } from "@/queries/stock-count/useGetStockCountById.query";
import StockCountEditForm from "./StockCountEditForm";
import StockCountEditTopBar from "./StockCountEditTopBar";

const StockCountEdit = ({ id }: { id: string }) => {
  const { data: stockData, status } = useGetStockCountById(id);

  const { data: outlets, status: outletStatus } = useGetOutlets({});
  const { outletOptions } = useMultiOptions({
    outlets: outlets?.body?.data,
  });

  const isLoading = outletStatus === "pending" || status === "pending";

  return (
    <LoadingWrapper loading={isLoading}>
      <ProtectedLayoutWrapper topBar={<StockCountEditTopBar />}>
        <PageHeader
          heading="Edit Storage"
          description="Edit Storage information."
        />
        <StockCountEditForm
          outletOptions={outletOptions}
          storageData={stockData?.body?.data}
        />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default StockCountEdit;
