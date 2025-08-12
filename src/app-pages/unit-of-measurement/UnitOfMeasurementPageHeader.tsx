"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const UnitOfMeasurementPageHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleAddUnit = () => {
    navigate(ProtectedUrls.admin.addUom);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Unit of Measurement"
        description="Manage preset UOMs of inventory items."
      />
      <div className="flex justify-end items-end">
        <Button variant="secondary" className="w-auto" onClick={handleAddUnit}>
          Add Unit
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(UnitOfMeasurementPageHeader);
