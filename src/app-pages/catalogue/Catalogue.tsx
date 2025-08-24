import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { CatalogueProvider } from "@/context/CatalogueContext";
import { Suspense } from "react";
import CatalogueCartItem from "./CatalogueCartItem";
import CatalogueFilter from "./CatalogueFilter";
import CataloguePageHeader from "./CataloguePageHeader";
import CatalogueTopBar from "./CatalogueTopBar";

const Catalogue = () => {
  return (
    <CatalogueProvider>
      <ProtectedLayoutWrapper topBar={<CatalogueTopBar />}>
        <CataloguePageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <CatalogueFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <CatalogueCartItem />
        </Suspense>
      </ProtectedLayoutWrapper>
    </CatalogueProvider>
  );
};

export default Catalogue;
