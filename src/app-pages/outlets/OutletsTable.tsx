"use client";
import OutletsListTable from "@/components/table/outlets/OutletsListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IOutlet } from "@/utils/types/outlet.type";
import { useState } from "react";

interface OutletsTableProps {
  outlets: IOutlet[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const OutletsTable = ({
  outlets,
  onEdit,
  onDelete,
  onView,
}: OutletsTableProps) => {
  const [page, setPage] = useState(1);
  console.log(outlets);
  return (
    <TableWrapper
      totalItems={outlets.length > 0 ? outlets.length : 0}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <OutletsListTable
        headtable={headtable}
        outletData={outlets}
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
