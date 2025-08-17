"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const SalesReportPageHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleAddSalesReport = () => {
    navigate(ProtectedUrls.common.viewSalesReport);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Sales"
        description="Manage all your restaurant sales and their configurations."
      />
      <div className="flex justify-end items-end">
        <Button
          variant="secondary"
          className="w-auto"
          onClick={handleAddSalesReport}
        >
          Add New
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(SalesReportPageHeader);
