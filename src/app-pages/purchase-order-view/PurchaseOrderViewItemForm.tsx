"use client";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useMemo, useState } from "react";
import PurchaseOrderViewItem from "./PurchaseOrderViewItem";

const headtable = [
  "Item Code",
  "Item Name",
  "Category",
  "Unit",
  "Qty",
  "Unit Price",
  "Total",
];

const POItem = [
  {
    item_code: "FV0001",
    item_name: "Item 1",
    category: "Category 1",
    unit: "pcs",
    qty: 1,
    unit_price: "85.50",
    total: "85.50",
  },
  {
    item_code: "FV001",
    item_name: "Item 2",
    category: "Category 2",
    unit: "pcs",
    qty: 1,
    unit_price: "85.50",
    total: "85.50",
  },
];

const PurchaseOrderViewItemForm = () => {
  const [page, setPage] = useState(1);

  // ✅ Apply pagination
  const paginatedItems = useMemo(() => {
    const start = (page - 1) * 10;
    return POItem.slice(start, start + 10);
  }, [page]);

  return (
    <TableWrapper
      totalItems={POItem.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(page) => setPage(page)}
    >
      {/* Table Data */}
      <PurchaseOrderViewItem
        headtable={headtable}
        POItem={paginatedItems}
        loading={false}
      />
    </TableWrapper>
  );
};

export default PurchaseOrderViewItemForm;
