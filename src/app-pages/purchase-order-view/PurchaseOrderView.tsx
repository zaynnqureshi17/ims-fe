import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PurchaseOrderAddForm from "./PurchaseOrderAddForm";
import PurchaseOrderAddPageHeader from "./PurchaseOrderAddPageHeader";
import PurchaseOrderDetails from "./PurchaseOrderDetails";
import PurchaseOrderViewItemForm from "./PurchaseOrderViewItemForm";
import PurchaseOrderViewTopBar from "./PurchaseOrderViewTopBar";

const PurchaseOrderView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<PurchaseOrderViewTopBar />}>
      <PurchaseOrderAddPageHeader />
      <PurchaseOrderDetails />
      <PurchaseOrderAddForm>
        <PurchaseOrderViewItemForm />
      </PurchaseOrderAddForm>
    </ProtectedLayoutWrapper>
  );
};

export default PurchaseOrderView;
