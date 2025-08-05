import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import UnitOfMeasurementEditForm from "./UnitOfMeasurementEditForm";
import UnitOfMeasurementEditTopBar from "./UnitOfMeasurementEditTopBar";

const UnitOfMeasurementEdit = () => {
  return (
    <ProtectedLayoutWrapper topBar={<UnitOfMeasurementEditTopBar />}>
      <PageHeader
        heading="Edit Unit"
        description="Update Unit of Measurement information."
      />
      <UnitOfMeasurementEditForm />
    </ProtectedLayoutWrapper>
  );
};

export default UnitOfMeasurementEdit;
