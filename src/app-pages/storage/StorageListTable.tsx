"use client";
import { useStorageContext } from "@/context/StorageContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useDeleteStorage } from "@/queries/storage/useDeleteStorage.query";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import StorageTable from "./StorageTable";

const StorageListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { storage, loading } = useStorageContext();
  const { mutate: deleteStorage } = useDeleteStorage();

  const handleEditStorage = (storageId: number) => {
    navigate(
      ProtectedUrls.common.editStorage.replace(":id", storageId.toString()),
    );
  };

  const handleDeleteStorage = (storageId: number) => {
    deleteStorage({
      id: storageId,
    });
  };
  // TODO

  const handleViewStorage = (storageId: number) => {
    navigate(
      ProtectedUrls.common.viewStorage.replace(":id", storageId.toString()),
    );
  };

  return (
    <StorageTable
      onEdit={handleEditStorage}
      onDelete={handleDeleteStorage}
      onView={handleViewStorage}
      storage={storage}
    />
  );
};

export default memo(StorageListTable);
