import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import UnitOfMeasurementAddTopBar from "./UnitOfMeasurementAddTopBar";
import UnitOfMeasurementAddForm from "./UnitOfMeasurementAddForm";

const UnitOfMeasurementAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<UnitOfMeasurementAddTopBar />}>
      <PageHeader
        heading="Add New Unit"
        description="Enter New Unit of Measurement ."
      />
      <UnitOfMeasurementAddForm />
    </ProtectedLayoutWrapper>
  );
};

export default UnitOfMeasurementAdd;
