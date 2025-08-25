"use client";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IItem } from "@/utils/types/item.types";
import { useState } from "react";
import PurchaseOrderViewItem from "./PurchaseOrderViewItem";
import { IPurchaseOrderItem } from "@/utils/types/po.type";

const headtable = [
  "Item Code",
  "Item Name",
  "Category",
  "Unit",
  "Qty",
  "Unit Price",
  "Total Cost",
];

const PurchaseOrderViewItemForm = ({
  poItems,
}: {
  poItems: IPurchaseOrderItem[];
}) => {
  const [page, setPage] = useState(1);
  console.log(poItems);

  return (
    <TableWrapper
      totalItems={poItems.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(page) => setPage(page)}
    >
      {/* Table Data */}
      <PurchaseOrderViewItem
        headtable={headtable}
        POItem={poItems}
        loading={false}
      />
    </TableWrapper>
  );
};

export default PurchaseOrderViewItemForm;
