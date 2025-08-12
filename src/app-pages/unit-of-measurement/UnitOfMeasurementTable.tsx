"use client";
import UOMListTable from "@/components/table/uom/UOMListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IUOM } from "@/utils/types/uom.type";
import { useState } from "react";

interface UnitOfMeasurementTableProps {
  uom: IUOM[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const UnitOfMeasurementTable = ({
  uom,
  onEdit,
  onDelete,
}: UnitOfMeasurementTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <UOMListTable
        headtable={headtable}
        UOMData={uom}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </TableWrapper>
  );
};

export default UnitOfMeasurementTable;

const headtable = [
  "ID",
  "UOM",
  "Category",
  "Quantity",
  "Base UOM",
  "Status",
  "Actions",
];
