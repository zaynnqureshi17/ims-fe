import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import BrandsFilter from "./BrandsFilter";
import BrandPageHeader from "./BrandsPageHeader";
import BrandsStat from "./BrandsStat";
import BrandsTableCard from "./BrandsTableCard";
import BrandsTopBar from "./BrandsTopBar";

const Brands = () => {
  return (
    <ProtectedLayoutWrapper topBar={<BrandsTopBar />}>
      <BrandPageHeader />
      <BrandsStat />
      <Suspense fallback={<div>Loading filters...</div>}>
        <BrandsFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <BrandsTableCard />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Brands;
