"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const SuppliersPageHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleAddSupplier = () => {
    navigate(ProtectedUrls.admin.addSupplier);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Suppliers"
        description="Manage all your restaurant suppliers and their configurations."
      />
      <div className="flex justify-end items-end">
        <Button
          variant="secondary"
          className="w-auto"
          onClick={handleAddSupplier}
        >
          Add Supplier
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(SuppliersPageHeader);
