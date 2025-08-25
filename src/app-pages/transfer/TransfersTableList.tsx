"use client";
import { useTransferContext } from "@/context/TransferContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useDeleteTransfer } from "@/queries/transfer/useDeleteTransfer.query";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import { toast } from "react-toastify";
import TransfersTable from "./TransfersTable";

const TransfersTableList: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { transfer } = useTransferContext();
  const { mutate: deleteTransfer } = useDeleteTransfer();

  const handleEditTransfer = (transferId: number) => {
    navigate(
      ProtectedUrls.common.editTransfer.replace(":id", transferId.toString()),
    );
  };

  const handleDeleteTransfer = (transferId: number) => {
    console.log(transferId);
    console.log("Deleting transfer with ID:", transferId);
    deleteTransfer(
      { id: transferId },
      {
        onSuccess: () => {
          toast.success("Transfer deleted successfully");
        },
      },
    );
  };

  const handleViewTransfer = (transferId: number) => {
    navigate(
      ProtectedUrls.common.viewTransfer.replace(":id", transferId.toString()),
    );
  };

  return (
    <TransfersTable
      transfers={transfer}
      onEdit={handleEditTransfer}
      onDelete={handleDeleteTransfer}
      onView={handleViewTransfer}
    />
  );
};

export default memo(TransfersTableList);
