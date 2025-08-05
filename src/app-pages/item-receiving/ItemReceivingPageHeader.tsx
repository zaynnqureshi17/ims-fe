"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const ItemReceivingPageHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleAddUnit = () => {
    navigate(ProtectedUrls.common.addItemReceiving);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader heading="Items" description="Manage and view all items." />
      <div className="flex justify-end items-end gap-x-4">
        <Button variant="secondary" className="w-auto" onClick={handleAddUnit}>
          Export CSV
        </Button>
        <Button variant="secondary" className="w-auto" onClick={handleAddUnit}>
          Add Item
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(ItemReceivingPageHeader);
