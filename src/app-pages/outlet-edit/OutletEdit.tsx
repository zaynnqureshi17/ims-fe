"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetBrand } from "@/queries/brands/useGetBrand.query";
import { useGetOutletById } from "@/queries/outlets/useGetOutletById.query";
import OutletEditForm from "./OutletEditForm";
import OutletEditTopBar from "./OutletEditTopBar";

const OutletEdit = ({ id }: { id: string }) => {
  const { data: outletData, status, error } = useGetOutletById(id);
  const { data: roles } = useGetBrand();
  const { brandOptions } = useMultiOptions({
    brands: roles?.body?.data,
  });

  const isError = status === "error";
  const outlet = outletData?.body?.data;
  const isLoading = status === "pending";
  const notFound = !isLoading && !isError && !outlet;

  return (
    <ProtectedLayoutWrapper topBar={<OutletEditTopBar />}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        {" "}
        <PageHeader
          heading="Edit Outlet"
          description="Update Outlet information."
        />
        <OutletEditForm outletData={outlet} brandOptions={brandOptions} />
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default OutletEdit;
