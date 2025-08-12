"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useGetBrandById } from "@/queries/brands/useGetBrandById.query";
import { IdProps } from "@/utils/types/common.type";
import BrandEditTopBar from "./BrandEditTopBar";
import BrandEditForm from "./BrandEditForm";

const BrandEdit = ({ id }: IdProps) => {
  const { data: brandData, status } = useGetBrandById(id);

  const isLoading = status === "pending";

  return (
    <LoadingWrapper loading={isLoading}>
      <ProtectedLayoutWrapper topBar={<BrandEditTopBar />}>
        <PageHeader
          heading="Edit Brand"
          description="Update Brand information."
        />
        <BrandEditForm brandData={brandData?.body?.data} />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default BrandEdit;
