"use client";
import { useOutletContext } from "@/context/OutletContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import OutletsTable from "./OutletsTable";

const OutletListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { outlet, loading } = useOutletContext();

  const handleEditOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.editOutlet.replace(":id", String(outletId)));
  };

  const handleDeleteOutlet = () => {
    // TODO
    console.log("Delete outlet action triggered");
  };

  const handleViewOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.viewOutlet.replace(":id", String(outletId)));
  };
  console.log(outlet);
  return (
    <OutletsTable
      outlets={outlet}
      onEdit={handleEditOutlet}
      onDelete={handleDeleteOutlet}
      onView={handleViewOutlet}
    />
  );
};

export default memo(OutletListTable);
