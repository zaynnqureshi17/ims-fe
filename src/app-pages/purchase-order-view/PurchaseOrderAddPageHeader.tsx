import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const PurchaseOrderViewPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="PO Details"
        description="View the details of your purchase order."
      />
    </GridWrapper>
  );
};

export default memo(PurchaseOrderViewPageHeader);
