"use client";
import UOMListTable, {
  UOMDataProps,
} from "@/components/table/uom/UOMListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

interface UnitOfMeasurementTableProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const UnitOfMeasurementTable = ({
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
        UOMData={UOMData}
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

const UOMData: UOMDataProps[] = [
  {
    id: 1,
    UOM: "Kilogram",
    category: "Weight",
    quantity: 100,
    base_UOM: "Gram",
    status: "Active",
  },
  {
    id: 2,
    UOM: "Kilogram",
    category: "Weight",
    quantity: 100,
    base_UOM: "Gram",
    status: "Active",
  },
  {
    id: 3,
    UOM: "Kilogram",
    category: "Weight",
    quantity: 100,
    base_UOM: "Gram",
    status: "Active",
  },
];
