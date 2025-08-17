"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const ProductionPageHeader = () => {
  const navigate = usePrefetchNavigate();

  const handleAddProduction = () => {
    console.log("Adding new production");
    navigate(ProtectedUrls.common.addProduction);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Production Management"
        description="Manage all your productions."
      />
      <div className="flex justify-end items-end gap-3">
        <Button className="w-auto cursor-pointer" onClick={handleAddProduction}>
          Add Production
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(ProductionPageHeader);
