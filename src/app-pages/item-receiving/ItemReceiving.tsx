import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { ItemProvider } from "@/context/item.context";
import ItemReceivingFilter from "./ItemReceivingFilter";
import ItemReceivingListTable from "./ItemReceivingListTable";
import ItemReceivingPageHeader from "./ItemReceivingPageHeader";
import ItemReceivingTopBar from "./ItemReceivingTopBar";
import { Suspense } from "react";

const ItemReceiving = () => {
  return (
    <ItemProvider>
      <ProtectedLayoutWrapper topBar={<ItemReceivingTopBar />}>
        <ItemReceivingPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <ItemReceivingFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <ItemReceivingListTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </ItemProvider>
  );
};

export default ItemReceiving;
