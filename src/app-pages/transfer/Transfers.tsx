import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import TransfersFilter from "./TransfersFilter";
import TransfersPageHeader from "./TransfersPageHeader";
import TransfersTableList from "./TransfersTableList";
import TransfersTopBar from "./TransfersTopBar";

const Transfers = () => {
  return (
    <ProtectedLayoutWrapper topBar={<TransfersTopBar />}>
      <TransfersPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <TransfersFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <TransfersTableList />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Transfers;
