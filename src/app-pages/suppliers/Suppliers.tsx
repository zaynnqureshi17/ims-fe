import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { SupplierProvider } from "@/context/SupplierContext";
import { Suspense } from "react";
import ServiceListTable from "./ServiceListTable";
import SuppliersFilter from "./SuppliersFilter";
import SuppliersPageHeader from "./SuppliersPageHeader";
import SuppliersTopBar from "./SuppliersTopBar";

const Suppliers = () => {
  return (
    <SupplierProvider>
      <ProtectedLayoutWrapper topBar={<SuppliersTopBar />}>
        <SuppliersPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <SuppliersFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <ServiceListTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </SupplierProvider>
  );
};

export default Suppliers;
