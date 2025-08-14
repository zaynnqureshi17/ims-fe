"use client";
import { useSupplierContext } from "@/context/SupplierContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useDeleteSupplier } from "@/queries/supplier/useDeleteSupplier.query";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import SupplierTable from "./SupplierTable";

const SupplierListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { supplier } = useSupplierContext();
  const { mutate: deleteSupplier } = useDeleteSupplier();

  const handleEditSupplier = (supplierId: number) => {
    navigate(
      ProtectedUrls.admin.editSupplier.replace(":id", String(supplierId)),
    );
  };

  const handleDeleteSupplier = (supplierId: number) => {
    deleteSupplier({
      id: supplierId,
    });
  };

  const handleViewSupplier = (supplierId: number) => {
    navigate(
      ProtectedUrls.admin.viewSupplier.replace(":id", String(supplierId)),
    );
  };
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
