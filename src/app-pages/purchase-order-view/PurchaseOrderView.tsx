"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useGetPOById } from "@/queries/purchaseOrder/useGetPOById.query";
import { useGetPOSummaryById } from "@/queries/purchaseOrder/useGetPOSummaryById.query";
import PurchaseOrderAddForm from "./PurchaseOrderAddForm";
import PurchaseOrderAddPageHeader from "./PurchaseOrderAddPageHeader";
import PurchaseOrderDetails from "./PurchaseOrderDetails";
import PurchaseOrderViewItemForm from "./PurchaseOrderViewItemForm";
import PurchaseOrderViewTopBar from "./PurchaseOrderViewTopBar";

const PurchaseOrderView = ({ id }: { id: string }) => {
  const { data: POData, status, error } = useGetPOById(id);
  const { data: POSummaryData, status: summaryStatus } =
    useGetPOSummaryById(id);

  const isLoading = status === "pending";
  const po = POData?.body?.data;
  const summary = POSummaryData?.body?.data;
  const isError = status === "error";
  const notFound = !isLoading && !isError && !po && !summary;

  return (
    <ProtectedLayoutWrapper topBar={<PurchaseOrderViewTopBar />}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        <PurchaseOrderAddPageHeader />
        <PurchaseOrderDetails
          poSupplier={po?.po_supplier}
          summary={summary?.summary}
          poNumber={po?.po_number}
          status="Pending Approval"
          createdAt={po?.created_at}
        />
        <PurchaseOrderAddForm>
          <PurchaseOrderViewItemForm poItems={po?.po_items} />
        </PurchaseOrderAddForm>
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default PurchaseOrderView;
