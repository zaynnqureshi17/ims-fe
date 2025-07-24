"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const OutletsPageHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleAddOutlet = () => {
    navigate(ProtectedUrls.admin.addOutlet);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Outlets"
        description="Manage all your restaurant outlets and their assignments "
      />
      <div className="flex justify-end items-end">
        <Button
          variant="secondary"
          className="w-auto"
          onClick={handleAddOutlet}
        >
          Add Outlet
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(OutletsPageHeader);
