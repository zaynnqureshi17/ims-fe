"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetBrand } from "@/queries/brands/useGetBrand.query";
import { useGetOutletById } from "@/queries/outlets/useGetOutletById.query";
import OutletEditForm from "./OutletEditForm";
import OutletEditTopBar from "./OutletEditTopBar";

const OutletEdit = ({ id }: { id: string }) => {
  const { data: outletData, status } = useGetOutletById(id);
  const { data: roles } = useGetBrand();
  const { brandOptions } = useMultiOptions({
    brands: roles?.body?.data,
  });

  const loading = status === "pending";
  return (
    <LoadingWrapper loading={loading}>
      <ProtectedLayoutWrapper topBar={<OutletEditTopBar />}>
        <PageHeader
          heading="Edit Outlet"
          description="Update Outlet information."
        />
        <OutletEditForm
          outletData={outletData?.body?.data}
          brandOptions={brandOptions}
        />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default OutletEdit;
