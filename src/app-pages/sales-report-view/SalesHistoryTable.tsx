"use client";
import SalesReportTable from "@/components/table/sales-report/SalesReportTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { ISales } from "@/utils/types/sales.type";
import { useState } from "react";

interface SalesHistoryTableProps {
  sales: ISales[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
  onDownload: (id: number) => void;
}

const headtable = [
  "Date",
  "File Name",
  "Status",
  "Record",
  "Revenue",
  "Uploaded By",
  "Actions",
];

const SalesHistoryTable = ({
  sales,
  onEdit,
  onDelete,
  onView,
  onDownload,
}: SalesHistoryTableProps) => {
  const [page, setPage] = useState(1);

  return (
    <TableWrapper
      totalItems={sales.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(p) => setPage(p)}
    >
      <SalesReportTable
        headtable={headtable}
        sales={sales}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
        onDownload={onDownload}
      />
    </TableWrapper>
  );
};

export default SalesHistoryTable;
