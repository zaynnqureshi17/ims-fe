import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import BrandEditForm from "./BrandEditForm";
import BrandEditTopBar from "./BrandEditTopBar";

const BrandEdit = () => {
  return (
    <ProtectedLayoutWrapper topBar={<BrandEditTopBar />}>
      <PageHeader
        heading="Edit Brand"
        description="Update Brand information."
      />
      <BrandEditForm />
    </ProtectedLayoutWrapper>
  );
};

export default BrandEdit;
