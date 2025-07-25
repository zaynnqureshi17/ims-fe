"use client";
import BrandViewListOutletTable, {
  BrandViewListOutletPropsTable,
} from "@/components/table/brands/BrandViewListOutletTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

interface OutletUserTabTableProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const OutletUserTabTable = ({
  onEdit,
  onDelete,
  onView,
}: OutletUserTabTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <BrandViewListOutletTable
        headtable={headtable}
        brandData={brandViewOutletData}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default OutletUserTabTable;

const headtable = [
  "ID",
  "Outlet",
  "Location",
  "Manager",
  "Performance",
  "Status",
  "Actions",
];

const brandViewOutletData: BrandViewListOutletPropsTable[] = [
  {
    id: 1,
    outlets: "Downtown Branch",
    location: "123 Main Street New York, NY 10001",
    manager: "John Doe",
    email: "john.doe@example.com",
    performance: "45230",
    status: "Active",
    createdDate: "2023-01-01",
  },
  {
    id: 2,
    outlets: "Downtown Branch",
    location: "123 Main Street New York, NY 10001",
    manager: "Jane Smith",
    email: "jane.smith@example.com",
    performance: "45230",
    status: "Active",
    createdDate: "2023-01-01",
  },
  {
    id: 3,
    outlets: "Downtown Branch",
    location: "123 Main Street New York, NY 10001",
    manager: "Alice Johnson",
    email: "alice.johnson@example.com",
    performance: "45230",
    status: "Active",
    createdDate: "2023-01-01",
  },
];
