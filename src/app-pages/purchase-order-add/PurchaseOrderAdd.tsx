"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetItem } from "@/queries/item/useGetItem.query";
import { useGetSupplier } from "@/queries/supplier/useGetSupplier.query";
import PurchaseOrderAddBar from "./PurchaseOrderAddBar";
import PurchaseOrderAddForm from "./PurchaseOrderAddForm";
import PurchaseOrderAddPageHeader from "./PurchaseOrderAddPageHeader";
import PurchaseOrderField from "./PurchaseOrderField";
import PurchaseOrderItemAddNew from "./PurchaseOrderItemAddNew";

const PurchaseOrderAdd = () => {
  const { data: items, status, error } = useGetItem({});
  const { data: suppliers, status: supplierStatus } = useGetSupplier({});
  const { itemOptions, supplierOptions } = useMultiOptions({
    items: items?.body?.data,
    suppliers: suppliers?.body?.data,
  });

  const isLoading = status === "pending" || supplierStatus === "pending";
  const isError = status === "error" || supplierStatus === "error";
  const notFound = !isLoading && !isError && !items && !suppliers;

  return (
    <ProtectedLayoutWrapper topBar={<PurchaseOrderAddBar />}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        <PurchaseOrderAddPageHeader />
        <PurchaseOrderAddForm>
          <PurchaseOrderField supplierOptions={supplierOptions} />
          <PurchaseOrderItemAddNew itemOptions={itemOptions} />
        </PurchaseOrderAddForm>
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default PurchaseOrderAdd;
