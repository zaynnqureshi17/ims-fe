"use client";
import ItemsReceivingListTable, {
  ItemReceivingDataProps,
} from "@/components/table/item-receiving/ItemsReceivingListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

interface ItemReceivingTableProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const ItemReceivingTable = ({
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
        ItemReceivingData={ItemReceivingData}
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

const ItemReceivingData: ItemReceivingDataProps[] = [
  {
    id: 1,
    item_name: "Item 1",
    brand_name: "Brand A",
    category_name: "Category X",
    sub_category_name: "Sub Category Y",
    supplier_name: "Supplier Z",
    purchase_uom: "pcs",
    price: "$10.00",
    status: "Active",
  },
  {
    id: 2,
    item_name: "Item 2",
    brand_name: "Brand B",
    category_name: "Category Y",
    sub_category_name: "Sub Category Z",
    supplier_name: "Supplier A",
    purchase_uom: "kg",
    price: "$20.00",
    status: "Inactive",
  },
];
