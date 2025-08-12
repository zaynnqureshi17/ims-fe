"use client";
import { useSupplierContext } from "@/context/supplier.context";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import SupplierTable from "./SupplierTable";

const SupplierListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { supplier } = useSupplierContext();

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
  console.log(supplier);
  return (
    <SupplierTable
      supplierData={supplier}
      onEdit={handleEditSupplier}
      onDelete={handleDeleteSupplier}
      onView={handleViewSupplier}
    />
  );
};

export default memo(SupplierListTable);
