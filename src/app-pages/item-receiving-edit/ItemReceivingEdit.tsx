import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import ItemReceivingAddForm from "./ItemReceivingEditForm";
import ItemReceivingAddTopBar from "./ItemReceivingEditTopBar";
import ItemReceivingEditForm from "./ItemReceivingEditForm";
import ItemReceivingEditTopBar from "./ItemReceivingEditTopBar";

const ItemReceivingEdit = () => {
  return (
    <ProtectedLayoutWrapper topBar={<ItemReceivingEditTopBar />}>
      <PageHeader heading="Edit Item" description="Update Item Details." />
      <ItemReceivingEditForm />
    </ProtectedLayoutWrapper>
  );
};

export default ItemReceivingEdit;
