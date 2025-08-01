"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import SupplierTable from "./SupplierTable";

const SupplierListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();

  const handleEditSupplier = (userId: number) => {
    navigate(ProtectedUrls.admin.editSupplier.replace(":id", String(userId)));
  };

  const handleDeleteSupplier = () => {
    // TODO
    console.log("Delete Supplier action triggered");
  };

  const handleViewSupplier = (userId: number) => {
    navigate(ProtectedUrls.admin.viewSupplier.replace(":id", String(userId)));
  };

  return (
    <SupplierTable
      onEdit={handleEditSupplier}
      onDelete={handleDeleteSupplier}
      onView={handleViewSupplier}
    />
  );
};

export default memo(SupplierListTable);
