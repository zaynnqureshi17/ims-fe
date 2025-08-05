import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import ItemReceivingAddForm from "./ItemReceivingAddForm";
import ItemReceivingAddTopBar from "./ItemReceivingAddTopBar";

const ItemReceivingAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<ItemReceivingAddTopBar />}>
      <PageHeader
        heading="Add New Item"
        description="Enter New Item Details."
      />
      <ItemReceivingAddForm />
    </ProtectedLayoutWrapper>
  );
};

export default ItemReceivingAdd;
