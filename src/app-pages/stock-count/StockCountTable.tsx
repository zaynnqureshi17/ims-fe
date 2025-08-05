"use client";
import StockCountListTable, {
  InterfaceStockCountsDataProps,
} from "@/components/table/stock-count/StockCountListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

interface StockCountTableProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const StockCountTable = ({
  onEdit,
  onDelete,
  onView,
}: StockCountTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <StockCountListTable
        headtable={headtable}
        StockCountData={StockCountData}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default StockCountTable;

const headtable = [
  "ID",
  "Storage Name",
  "Outlet",
  "Department",
  "Description",
  "Status",
  "Actions",
];

const StockCountData: InterfaceStockCountsDataProps[] = [
  {
    id: 1,
    storage_name: "Main Warehouse",
    outlet: "Outlet A",
    department: "Electronics",
    description: "Main storage for electronics",
    status: "Active",
  },
  {
    id: 2,
    storage_name: "Secondary Warehouse",
    outlet: "Outlet B",
    department: "Clothing",
    description: "Secondary storage for clothing",
    status: "Inactive",
  },
  {
    id: 3,
    storage_name: "Tertiary Warehouse",
    outlet: "Outlet C",
    department: "Furniture",
    description: "Tertiary storage for furniture",
    status: "Active",
  },
];
