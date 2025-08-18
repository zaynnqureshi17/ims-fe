"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const WastePageHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleAddWaste = () => {
    navigate(ProtectedUrls.common.addWaste);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Waste Management"
        description="Manage all your waste materials and their configurations."
      />
      <div className="flex justify-end items-end">
        <Button variant="secondary" className="w-auto" onClick={handleAddWaste}>
          Add Waste
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(WastePageHeader);
