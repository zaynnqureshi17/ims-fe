"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import { useGetStockCountById } from "@/queries/stock-count/useGetStockCountById.query";
import StockCountEditForm from "./StockCountEditForm";
import StockCountEditTopBar from "./StockCountEditTopBar";

const StockCountEdit = ({ id }: { id: string }) => {
  const { data: storageData, status, error } = useGetStockCountById(id);

  const { data: outlets, status: outletStatus } = useGetOutlets({});
  const { outletOptions } = useMultiOptions({
    outlets: outlets?.body?.data,
  });

  const isLoading = outletStatus === "pending" || status === "pending";
  const storage = storageData?.body?.data;
  const isError = status === "error";
  const notFound = !isLoading && !isError && !storage;

  return (
    <ProtectedLayoutWrapper topBar={<StockCountEditTopBar />}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        {" "}
        <PageHeader
          heading="Edit Storage"
          description="Edit Storage information."
        />
        <StockCountEditForm
          outletOptions={outletOptions}
          storageData={storage}
        />
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default StockCountEdit;
