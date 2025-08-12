import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { BrandProvider } from "@/context/BrandContext";
import { Suspense } from "react";
import BrandsFilter from "./BrandsFilter";
import BrandPageHeader from "./BrandsPageHeader";
import BrandsStat from "./BrandsStat";
import BrandsTableCard from "./BrandsTableCard";
import BrandsTopBar from "./BrandsTopBar";

const Brands = () => {
  return (
    <BrandProvider>
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
    </BrandProvider>
  );
};

export default Brands;
