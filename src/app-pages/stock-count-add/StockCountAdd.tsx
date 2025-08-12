"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetBrand } from "@/queries/brands/useGetBrand.query";
import StockCountAddForm from "./StockCountAddForm";
import StockCountAddTopBar from "./StockCountAddTopBar";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";

const StockCountAdd = () => {
  const { data: outlets, status: outletStatus } = useGetOutlets({});
  const { outletOptions } = useMultiOptions({
    outlets: outlets?.body?.data,
  });

  const isLoading = outletStatus === "pending";

  return (
    <LoadingWrapper loading={isLoading}>
      <ProtectedLayoutWrapper topBar={<StockCountAddTopBar />}>
        <PageHeader
          heading="Add New Storage "
          description="Enter New Storage information."
        />
        <StockCountAddForm outletOptions={outletOptions} />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default StockCountAdd;
