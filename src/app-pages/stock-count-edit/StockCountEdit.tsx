import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StockCountEditForm from "./StockCountEditForm";
import StockCountEditTopBar from "./StockCountEditTopBar";

const StockCountEdit = () => {
  return (
    <ProtectedLayoutWrapper topBar={<StockCountEditTopBar />}>
      <PageHeader
        heading="Edit Storage "
        description="Edit Storage information."
      />
      <StockCountEditForm />
    </ProtectedLayoutWrapper>
  );
};

export default StockCountEdit;
