"use client";
import BrandsListTable from "@/components/table/brand/BrandsListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

interface BrandTableProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const BrandsTable = ({ onEdit, onDelete, onView }: BrandTableProps) => {
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
        brandData={brandData}
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

const brandData = [
  {
    id: 1,
    brandName: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outlets: "2",
    status: "Active",
    createdDate: "2023-01-01",
  },
  {
    id: 2,
    brandName: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outlets: "2",
    status: "Active",
    createdDate: "2023-01-01",
  },
  {
    id: 3,
    brandName: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outlets: "2",
    status: "Active",
    createdDate: "2023-01-01",
  },
];
