import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import SupplierAddTopBar from "./SupplierAddTopBar";
import SupplierAddForm from "./SupplierAddForm";

const SupplierAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<SupplierAddTopBar />}>
      <PageHeader
        heading="Add New Supplier"
        description="Enter New Supplier information."
      />
      <SupplierAddForm />
    </ProtectedLayoutWrapper>
  );
};

export default SupplierAdd;
