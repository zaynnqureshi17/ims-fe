"use client";
import { useStorageContext } from "@/context/StorageContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import React, { memo } from "react";
import StorageTable from "./StorageTable";

const StorageListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { storage, loading } = useStorageContext();

  const handleEditStockCount = (storageId: number) => {
    console.log(storageId);
  };

  const handleDeleteStockCount = () => {
    // TODO
    console.log("Delete Stock Count action triggered");
  };

  const handleViewStockCount = (storageId: number) => {
    console.log(storageId);
  };

  return (
    <StorageTable
      onEdit={handleEditStockCount}
      onDelete={handleDeleteStockCount}
      onView={handleViewStockCount}
      storage={storage}
    />
  );
};

export default memo(StorageListTable);
