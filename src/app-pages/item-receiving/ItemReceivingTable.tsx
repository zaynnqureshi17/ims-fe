"use client";
import ItemsReceivingListTable from "@/components/table/item-receiving/ItemsReceivingListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IItem } from "@/utils/types/item.types";
import { useState } from "react";

interface ItemReceivingTableProps {
  item: IItem[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const ItemReceivingTable = ({
  item,
  onEdit,
  onDelete,
  onView,
}: ItemReceivingTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <ItemsReceivingListTable
        headtable={headtable}
        ItemReceivingData={item}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default ItemReceivingTable;

const headtable = [
  "ID",
  "Item Name",
  "Brand",
  "Category",
  "Sub Category",
  "Supplier",
  "Purchase UOM",
  "Price",
  "Status",
  "Actions",
];
