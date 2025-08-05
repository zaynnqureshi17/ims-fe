import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import ItemReceivingFilter from "./ItemReceivingFilter";
import ItemReceivingListTable from "./ItemReceivingListTable";
import ItemReceivingPageHeader from "./ItemReceivingPageHeader";
import ItemReceivingTopBar from "./ItemReceivingTopBar";

const ItemReceiving = () => {
  return (
    <ProtectedLayoutWrapper topBar={<ItemReceivingTopBar />}>
      <ItemReceivingPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <ItemReceivingFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <ItemReceivingListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default ItemReceiving;
