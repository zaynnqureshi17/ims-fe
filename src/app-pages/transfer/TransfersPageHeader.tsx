"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const TransfersPageHeader = () => {
  const navigate = usePrefetchNavigate();

  const handleExport = () => {
    console.log("Exporting recipes");
    // navigate(ProtectedUrls.admin.exportRecipes);
  };

  const handleAddRecipe = () => {
    console.log("Adding new recipe");
    navigate(ProtectedUrls.common.addTransfer);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Transfer Management"
        description="Manage all your transfers."
      />
      <div className="flex justify-end items-end gap-3">
        <Button className="w-auto cursor-pointer" onClick={handleAddRecipe}>
          Add Transfer
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(TransfersPageHeader);
