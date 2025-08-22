"use client";
import StorageListTable from "@/components/table/storage/StorageListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IStorage } from "@/utils/types/storage.type";
import { useState } from "react";

interface StorageTableProps {
  storage: IStorage[] | [];
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
      totalItems={storage.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(page) => setPage(page)}
    >
      <StorageListTable
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
  "Description",
  "Status",
  "Actions",
];
