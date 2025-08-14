"use client";
import BrandViewListOutletTable from "@/components/table/brands/BrandViewListOutletTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IBrandResponse } from "@/utils/types/brand.type";
import { useState } from "react";

interface BrandViewOutletTableProps {
  brandView: IBrandResponse | null;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const BrandViewOutletTable = ({
  brandView,
  onEdit,
  onDelete,
  onView,
}: BrandViewOutletTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={Array.isArray(brandView) ? brandView.length : 0}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <BrandViewListOutletTable
        headtable={headtable}
        brandOulletDataView={brandView}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default BrandViewOutletTable;

const headtable = [
  "ID",
  "Outlet",
  "Location",
  "Manager",
  "Performance",
  "Status",
  "Actions",
];
