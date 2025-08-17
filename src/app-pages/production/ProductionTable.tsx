"use client";
import ProductionListTable from "@/components/table/production/ProductionListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";
import type { IProduction } from "./ProductionTableList";

interface ProductionTableProps {
  production: IProduction[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const ProductionTable = ({
  production,
  onEdit,
  onDelete,
  onView,
}: ProductionTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={production.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(p) => setPage(p)}
    >
      <ProductionListTable
        headtable={headtable}
        production={production}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default ProductionTable;

const headtable = [
  "Date & Time",
  "Recipe",
  "Quantity",
  "Total Cost",
  "Produced By",
  "Status",
  "Actions",
];
