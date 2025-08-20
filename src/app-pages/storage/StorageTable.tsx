"use client";
import StockCountListTable from "@/components/table/storage/StockCountListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IStorage } from "@/utils/types/storage.type";
import { useState } from "react";

interface StorageTableProps {
  storage: IStorage[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const StorageTable = ({
  storage,
  onEdit,
  onDelete,
  onView,
}: StorageTableProps) => {
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

export default StorageTable;

const headtable = [
  "ID",
  "Storage Name",
  "Outlet",
  "Department",
  "Description",
  "Status",
  "Actions",
];
