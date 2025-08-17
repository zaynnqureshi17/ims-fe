"use client";
import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const PurchaseOrderPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Purchase Order"
        description="Manage all your purchase orders."
      />
    </GridWrapper>
  );
};

export default memo(PurchaseOrderPageHeader);
