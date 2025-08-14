"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useGetBrandById } from "@/queries/brands/useGetBrandById.query";
import { IdProps } from "@/utils/types/common.type";
import BrandEditForm from "./BrandEditForm";
import BrandEditTopBar from "./BrandEditTopBar";

const BrandEdit = ({ id }: IdProps) => {
  const { data: brandData, status, error } = useGetBrandById(id);

  const isLoading = status === "pending";
  const brand = brandData?.body?.data;
  const isError = status === "error";
  const notFound = !isLoading && !isError && !brand;

  return (
    <ProtectedLayoutWrapper topBar={<BrandEditTopBar />}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        <PageHeader
          heading="Edit Brand"
          description="Update Brand information."
        />
        <BrandEditForm brandData={brand} />
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default BrandEdit;
