"use client";
import StockCountListTable from "@/components/table/stock-count/StockCountListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IStorage } from "@/utils/types/stock.count.type";
import { useState } from "react";

interface StockCountTableProps {
  storage: IStorage[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const StockCountTable = ({
  storage,
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
        StockCountData={storage}
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
