"use client";
import { useOutletContext } from "@/context/OutletContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useDeleteOutlet } from "@/queries/outlets/useDeleteOutlet.query";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import OutletsTable from "./OutletsTable";

const OutletListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { outlet, loading } = useOutletContext();
  const { mutate: deleteOutlet } = useDeleteOutlet();

  const handleEditOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.editOutlet.replace(":id", String(outletId)));
  };

  const handleDeleteOutlet = (outletId: number) => {
    deleteOutlet({
      id: outletId,
    });
  };

  const handleViewOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.viewOutlet.replace(":id", String(outletId)));
  };
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
