"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import OutletsTable from "./OutletsTable";

const OutletListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();

  const handleEditOutlet = (outletId: number) => {
    navigate(
      ProtectedUrls.admin.editOutlet.replace(":id", outletId.toString()),
    );
  };

  const handleDeleteOutlet = () => {
    // TODO
    console.log("Delete outlet action triggered");
  };

  const handleViewOutlet = (outletId: number) => {
    navigate(
      ProtectedUrls.admin.viewOutlet.replace(":id", outletId.toString()),
    );
  };

  return (
    <OutletsTable
      onEdit={handleEditOutlet}
      onDelete={handleDeleteOutlet}
      onView={handleViewOutlet}
    />
  );
};

export default memo(OutletListTable);
