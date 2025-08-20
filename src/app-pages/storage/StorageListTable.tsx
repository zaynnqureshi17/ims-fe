"use client";
import { useStockContext } from "@/context/StockCountContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import StorageTable from "./StorageTable";

const StorageListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { stock, loading } = useStockContext();

  const handleEditStockCount = (userId: number) => {
    navigate(
      ProtectedUrls.common.editStockCount.replace(":id", String(userId)),
    );
  };

  const handleDeleteStockCount = () => {
    // TODO
    console.log("Delete Stock Count action triggered");
  };

  const handleViewStockCount = (userId: number) => {
    navigate(
      ProtectedUrls.common.viewStockCount.replace(":id", String(userId)),
    );
  };

  return (
    <StorageTable
      onEdit={handleEditStockCount}
      onDelete={handleDeleteStockCount}
      onView={handleViewStockCount}
      storage={stock}
    />
  );
};

export default memo(StorageListTable);
