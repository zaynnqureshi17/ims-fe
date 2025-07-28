import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import BrandsFilter from "../brands/BrandsFilter";
import BrandDetailView from "./BrandDetailView";
import BrandViewTable from "./BrandViewTable";
import BrandViewTopBar from "./BrandViewTopBar";

const BrandView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<BrandViewTopBar />}>
      <BrandDetailView />
      <Suspense fallback={<div>Loading filters...</div>}>
        <BrandsFilter />
      </Suspense>
      <BrandViewTable />
    </ProtectedLayoutWrapper>
  );
};

export default BrandView;
