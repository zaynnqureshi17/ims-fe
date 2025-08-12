"use client";
import BrandsListTable from "@/components/table/brands/BrandsListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IBrand } from "@/utils/types/brand.type";
import { useState } from "react";

interface BrandTableProps {
  brand: IBrand[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const BrandsTable = ({ brand, onEdit, onDelete, onView }: BrandTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <BrandsListTable
        headtable={headtable}
        brandData={brand}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default BrandsTable;

const headtable = [
  "ID",
  "Brand Name",
  "Description",
  "Outlets",
  "Created Date",
  "Status",
  "Actions",
];
