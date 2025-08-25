import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { TransferProvider } from "@/context/TransferContext";
import { Suspense } from "react";
import TransfersFilter from "./TransfersFilter";
import TransfersPageHeader from "./TransfersPageHeader";
import TransfersTableList from "./TransfersTableList";
import TransfersTopBar from "./TransfersTopBar";

const Transfers = () => {
  return (
    <TransferProvider>
      <ProtectedLayoutWrapper topBar={<TransfersTopBar />}>
        <TransfersPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <TransfersFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <TransfersTableList />
        </Suspense>
      </ProtectedLayoutWrapper>
    </TransferProvider>
  );
};

export default Transfers;
