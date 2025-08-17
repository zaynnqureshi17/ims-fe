import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const PurchaseOrderAddPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Add to PO"
        description="Add items to your purchase order."
      />
    </GridWrapper>
  );
};

export default memo(PurchaseOrderAddPageHeader);
