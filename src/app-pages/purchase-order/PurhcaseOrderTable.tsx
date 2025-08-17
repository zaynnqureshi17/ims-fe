"use client";
import PurchaseOrderListTable from "@/components/table/purchase-order/PurchaseOrderListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IBrand } from "@/utils/types/brand.type";
import { PurchaseOrder } from "@/utils/types/po.type";
import { useState } from "react";

interface PurchaseOrderTableProps {
  purchaseOrders: PurchaseOrder[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const PurchaseOrderTable = ({
  purchaseOrders,
  onEdit,
  onDelete,
  onView,
}: PurchaseOrderTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={purchaseOrders.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(page) => setPage(page)}
    >
      <PurchaseOrderListTable
        headtable={headtable}
        purchaseOrder={purchaseOrders}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default PurchaseOrderTable;

const headtable = [
  "PO#",
  "Supplier",
  "Items",
  "Cost",
  "Date",
  "Status",
  "Actions",
];
