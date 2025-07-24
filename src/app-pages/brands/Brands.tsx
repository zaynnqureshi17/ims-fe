import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import BrandsFilter from "./BrandsFilter";
import BrandPageHeader from "./BrandsPageHeader";
import BrandsStat from "./BrandsStat";
import BrandsTable from "./BrandsTable";
import BrandsTopBar from "./BrandsTopBar";

const Brands = () => {
  return (
    <ProtectedLayoutWrapper topBar={<BrandsTopBar />}>
      <BrandPageHeader />
      <BrandsStat />
      <Suspense fallback={<div>Loading filters...</div>}>
        <BrandsFilter />
      </Suspense>
      <BrandsTable />
    </ProtectedLayoutWrapper>
  );
};

export default Brands;
