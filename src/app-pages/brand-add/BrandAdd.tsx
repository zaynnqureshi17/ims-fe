import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import BrandAddForm from "./BrandAddForm";
import BrandAddTopBar from "./BrandAddTopBar";

const BrandAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<BrandAddTopBar />}>
      <PageHeader
        heading="Add New Brand"
        description="Enter New Brand information."
      />
      <BrandAddForm />
    </ProtectedLayoutWrapper>
  );
};

export default BrandAdd;
