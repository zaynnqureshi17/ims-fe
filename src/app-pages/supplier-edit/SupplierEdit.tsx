import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import SupplierEditForm from "./SupplierEditForm";
import SupplierEditTopBar from "./SupplierEditTopBar";

const SupplierEdit = () => {
  return (
    <ProtectedLayoutWrapper topBar={<SupplierEditTopBar />}>
      <PageHeader
        heading="Edit Supplier"
        description="Update supplier information."
      />
      <SupplierEditForm />
    </ProtectedLayoutWrapper>
  );
};

export default SupplierEdit;
