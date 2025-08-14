"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useGetSupplierById } from "@/queries/supplier/useGetSupplierById.query";
import SupplierEditForm from "./SupplierEditForm";
import SupplierEditTopBar from "./SupplierEditTopBar";

const SupplierEdit = ({ id }: { id: string }) => {
  const { data: supplierData, status, error } = useGetSupplierById(id);

  const loading = status === "pending";
  const user = supplierData?.body?.data;
  const isError = status === "error";
  const notFound = !loading && !isError && !user;
  return (
    <ProtectedLayoutWrapper topBar={<SupplierEditTopBar />}>
      <StateWrapper
        loading={loading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        <PageHeader
          heading="Edit Supplier"
          description="Update supplier information."
        />
        <SupplierEditForm supplierData={supplierData?.body?.data} />
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default SupplierEdit;
