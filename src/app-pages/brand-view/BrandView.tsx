"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useGetBrandById } from "@/queries/brands/useGetBrandById.query";
import { IdProps } from "@/utils/types/common.type";
import { Suspense } from "react";
import BrandsFilter from "../brands/BrandsFilter";
import BrandDetailView from "./BrandDetailView";
import BrandViewTable from "./BrandViewTable";
import BrandViewTopBar from "./BrandViewTopBar";

const BrandView = ({ id }: IdProps) => {
  const { data: brandData, status } = useGetBrandById(id);
  const isLoading = status === "pending";

  return (
    <LoadingWrapper loading={isLoading}>
      <ProtectedLayoutWrapper topBar={<BrandViewTopBar />}>
        <BrandDetailView brandData={brandData?.body?.data} />
        <Suspense fallback={<div>Loading filters...</div>}>
          <BrandsFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <BrandViewTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default BrandView;
