import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import UnitOfMeasurementFilter from "./UnitOfMeasurementFilter";
import UnitOfMeasurementListTable from "./UnitOfMeasurementListTable";
import UnitOfMeasurementPageHeader from "./UnitOfMeasurementPageHeader";
import UnitOfMeasurementTopBar from "./UnitOfMeasurementTopBar";

const UnitOfMeasurement = () => {
  return (
    <ProtectedLayoutWrapper topBar={<UnitOfMeasurementTopBar />}>
      <UnitOfMeasurementPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <UnitOfMeasurementFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <UnitOfMeasurementListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default UnitOfMeasurement;
