"use client";
import OutletsListTable, {
  OutletDataProps,
} from "@/components/table/outlets/OutletsListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

interface OutletsTableProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const OutletsTable = ({ onEdit, onDelete, onView }: OutletsTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <OutletsListTable
        headtable={headtable}
        outletData={OutletData}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default OutletsTable;

const headtable = [
  "ID",
  "Outlet",
  "Location",
  "Brand",
  "Created Date",
  "Status",
  "Actions",
];

const OutletData: OutletDataProps[] = [
  {
    id: 1,
    outlets: "Downtown Branch",
    location: "123 Main Street New York, NY 10001",
    brand_name: "Brand A",
    status: "Active",
    created_date: "2023-01-01",
  },
  {
    id: 2,
    outlets: "Downtown Branch",
    location: "123 Main Street New York, NY 10001",
    brand_name: "Brand A",
    status: "Active",
    created_date: "2023-01-01",
  },

  {
    id: 3,
    outlets: "Downtown Branch",
    location: "123 Main Street New York, NY 10001",
    brand_name: "Brand A",
    status: "Active",
    created_date: "2023-01-01",
  },
];
