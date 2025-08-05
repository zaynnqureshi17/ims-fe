import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StockCountAddForm from "./StockCountAddForm";
import StockCountAddTopBar from "./StockCountAddTopBar";

const StockCountAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<StockCountAddTopBar />}>
      <PageHeader
        heading="Add New Storage "
        description="Enter New Storage information."
      />
      <StockCountAddForm />
    </ProtectedLayoutWrapper>
  );
};

export default StockCountAdd;
