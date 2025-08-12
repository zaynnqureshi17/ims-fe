"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useGetSupplierById } from "@/queries/supplier/useGetSupplierById.query";
import SupplierEditForm from "./SupplierEditForm";
import SupplierEditTopBar from "./SupplierEditTopBar";

const SupplierEdit = ({ id }: { id: string }) => {
  const { data: supplierData, status } = useGetSupplierById(id);

  const loading = status === "pending";
  console.log(supplierData?.body?.data);
  return (
    <LoadingWrapper loading={loading}>
      <ProtectedLayoutWrapper topBar={<SupplierEditTopBar />}>
        <PageHeader
          heading="Edit Supplier"
          description="Update supplier information."
        />
        <SupplierEditForm supplierData={supplierData?.body?.data} />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default SupplierEdit;
