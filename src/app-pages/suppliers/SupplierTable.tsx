"use client";
import SupplierListTable from "@/components/table/supplier/SupplierListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { ISupplier } from "@/utils/types/supplier.type";
import { useState } from "react";

interface SupplierTableProps {
  supplierData: ISupplier[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const SupplierTable = ({
  supplierData,
  onEdit,
  onDelete,
  onView,
}: SupplierTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={supplierData.length}
      currentPage={page}
      itemsPerPage={1}
      onPageChange={(page) => setPage(page)}
    >
      <SupplierListTable
        headtable={headtable}
        supplierData={supplierData}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default SupplierTable;

const headtable = [
  "ID",
  "Name & Email",
  "Category",
  "PIC",
  "Contact",
  "Service Area",
  "Status",
  "Actions",
];
