"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useGetSupplierById } from "@/queries/supplier/useGetSupplierById.query";
import SupplierViewActivity from "./SupplierViewActivity";
import SupplierViewHeader from "./SupplierViewHeader";
import SupplierViewMain from "./SupplierViewMain";
import SupplierViewTopBar from "./SupplierViewTopBar";

const SupplierView = ({ id }: { id: string }) => {
  const { data: supplierData, status } = useGetSupplierById(id);

  const loading = status === "pending";
  console.log(supplierData?.body?.data);
  return (
    <LoadingWrapper loading={loading}>
      <ProtectedLayoutWrapper topBar={<SupplierViewTopBar />}>
        <SupplierViewHeader />
        <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SupplierViewMain supplierViewData={supplierData?.body?.data} />
          <SupplierViewActivity />
        </GridWrapper>
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default SupplierView;
