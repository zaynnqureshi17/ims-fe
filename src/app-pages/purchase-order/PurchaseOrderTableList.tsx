"use client";
import PurchaseOrderListTable from "@/components/table/purchase-order/PurchaseOrderListTable";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { PurchaseOrder } from "@/utils/types/po.type";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import PurchaseOrderTable from "./PurhcaseOrderTable";

const PurchaseOrderTableList: React.FC = () => {
  const navigate = usePrefetchNavigate();

  const handleEditPO = (purchaseOrderId: number) => {
    navigate(
      ProtectedUrls.common.editPurchaseOrder.replace(
        ":id",
        purchaseOrderId.toString(),
      ),
    );
  };

  const handleDeletePO = (purchaseOrderId: number) => {
    console.log("Deleting purchase order with ID:", purchaseOrderId);
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
      purchaseOrders={purchaseOrders}
      onEdit={handleEditPO}
      onDelete={handleDeletePO}
      onView={handleViewPO}
    />
  );
};

export default memo(PurchaseOrderTableList);
const purchaseOrders: PurchaseOrder[] = [
  {
    po_id: 1,
    supplier: "Supplier A",
    items: 5,
    cost: 100,
    created_at: "2023-01-01",
    status: "active",
  },
  {
    po_id: 2,
    supplier: "Supplier B",
    items: 3,
    cost: 200,
    created_at: "2023-02-01",
    status: "inactive",
  },
  {
    po_id: 3,
    supplier: "Supplier C",
    items: 8,
    cost: 150,
    created_at: "2023-03-01",
    status: "active",
  },
];
