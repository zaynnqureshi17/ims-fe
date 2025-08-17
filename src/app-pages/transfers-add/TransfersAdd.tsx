import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import TransfersAddTopBar from "./TransfersAddTopBar";
import TransferField from "./TransferField";
import TransfersAddNew from "./TransfersAddNew";
import TransferItemForm from "./TransferItemForm";
import TransfersAddForm from "./TransfersAddForm";
import TransfersAddPageHeader from "./TransfersAddPageHeader";
import TransferAdditional from "./TransferAdditional";

const TransfersAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<TransfersAddTopBar />}>
      <TransfersAddPageHeader />
      <TransfersAddForm>
        <TransferField />
        <TransfersAddNew />
        <TransferItemForm />
        <TransferAdditional />
      </TransfersAddForm>
    </ProtectedLayoutWrapper>
  );
};

export default TransfersAdd;
