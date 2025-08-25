"use client";
import TransfersListTable from "@/components/table/transfer/TransferListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { ITransfer } from "@/utils/types/transfer.type";
import { useState } from "react";

interface TransfersTableProps {
  transfers: ITransfer[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const TransfersTable = ({
  transfers,
  onEdit,
  onDelete,
  onView,
}: TransfersTableProps) => {
  const [page, setPage] = useState(1);

  return (
    <TableWrapper
      totalItems={transfers.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(page) => setPage(page)}
    >
      <TransfersListTable
        headtable={headtable}
        transfers={transfers}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default TransfersTable;

const headtable = [
  "Transfer ID",
  "From",
  "To",
  "Date",
  "Items",
  "Status",
  "Actions",
];
