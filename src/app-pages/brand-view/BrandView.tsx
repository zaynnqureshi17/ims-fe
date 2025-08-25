"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { BrandViewProvider } from "@/context/BrandViewContext";
import { useGetBrandById } from "@/queries/brands/useGetBrandById.query";
import { IBrandResponse } from "@/utils/types/brand.type";
import { IdProps } from "@/utils/types/common.type";
import { Suspense, useState } from "react";
import BrandDetailView from "./BrandDetailView";
import BrandViewFilter from "./BrandViewFilter";
import BrandViewTable from "./BrandViewTable";
import BrandViewTopBar from "./BrandViewTopBar";

const BrandView = ({ id }: IdProps) => {
  const [brandView, setBrandView] = useState<IBrandResponse | null>(null);
  const { data: brandData, status, error } = useGetBrandById(id);
  const isLoading = status === "pending";

  const brand = brandData?.body?.data;
  const isError = status === "error";
  const notFound = !isLoading && !isError && !brand;

  return (
    <BrandViewProvider brandView={brand} setBrandView={setBrandView}>
      <ProtectedLayoutWrapper topBar={<BrandViewTopBar />}>
        <StateWrapper
          loading={isLoading}
          error={
            isError
              ? ((error as Error)?.message ?? "Failed to load data")
              : null
          }
          notFound={notFound}
        >
          <BrandDetailView />
          <Suspense fallback={<div>Loading filters...</div>}>
            <BrandViewFilter />
          </Suspense>
          <Suspense fallback={<div>Loading filters...</div>}>
            <BrandViewTable />
          </Suspense>
        </StateWrapper>
      </ProtectedLayoutWrapper>
    </BrandViewProvider>
  );
};

export default BrandView;
