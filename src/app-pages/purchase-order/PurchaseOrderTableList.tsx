"use client";
import { usePOContext } from "@/context/POContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useDeletePO } from "@/queries/purchaseOrder/useDeletePO.query";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import { toast } from "react-toastify";
import PurchaseOrderTable from "./PurhcaseOrderTable";

const PurchaseOrderTableList: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { po } = usePOContext();
  const { mutate: deletePO } = useDeletePO();
  const handleEditPO = (purchaseOrderId: number) => {
    navigate(
      ProtectedUrls.common.editPurchaseOrder.replace(
        ":id",
        purchaseOrderId.toString(),
      ),
    );
  };

  const handleDeletePO = (purchaseOrderId: number) => {
    deletePO(
      { id: purchaseOrderId },
      {
        onSuccess: () => {
          toast.success("Purchase order deleted successfully");
        },
      },
    );
  };

  const handleViewPO = (purchaseOrderId: number) => {
    navigate(
      ProtectedUrls.common.viewPurchaseOrder.replace(
        ":id",
        purchaseOrderId.toString(),
      ),
    );
  };

  return (
    <PurchaseOrderTable
      purchaseOrders={po}
      onEdit={handleEditPO}
      onDelete={handleDeletePO}
      onView={handleViewPO}
    />
  );
};

export default memo(PurchaseOrderTableList);
