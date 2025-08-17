import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PurchaseOrderAddBar from "./PurchaseOrderAddBar";
import PurchaseOrderAddForm from "./PurchaseOrderAddForm";
import PurchaseOrderAddPageHeader from "./PurchaseOrderAddPageHeader";
import PurchaseOrderItemForm from "./PurchaseOrderItemForm";

const PurchaseOrderAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<PurchaseOrderAddBar />}>
      <PurchaseOrderAddPageHeader />
      <PurchaseOrderAddForm>
        <PurchaseOrderItemForm />
      </PurchaseOrderAddForm>
    </ProtectedLayoutWrapper>
  );
};

export default PurchaseOrderAdd;
