import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import ServiceListTable from "./ServiceListTable";
import UsersFilter from "./SuppliersFilter";
import SuppliersPageHeader from "./SuppliersPageHeader";
import SuppliersTopBar from "./SuppliersTopBar";

const Suppliers = () => {
  return (
    <ProtectedLayoutWrapper topBar={<SuppliersTopBar />}>
      <SuppliersPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <UsersFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <ServiceListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Suppliers;
