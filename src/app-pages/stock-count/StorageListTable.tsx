"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import StockCountTable from "./StockCountTable";

const StorageListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();

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
    <StockCountTable
      onEdit={handleEditStockCount}
      onDelete={handleDeleteStockCount}
      onView={handleViewStockCount}
    />
  );
};

export default memo(StorageListTable);
