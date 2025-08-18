"use client";
import WasteListTable from "@/components/table/waste/WasteListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IWaste } from "@/utils/types/waste.type";
import { useState } from "react";

interface WasteAddTableProps {
  waste: IWaste[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const WasteAddTable = ({
  waste,
  onEdit,
  onDelete,
  onView,
}: WasteAddTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={waste.length > 0 ? waste.length : 0}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <WasteListTable
        headtable={headtable}
        WasteData={waste}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default WasteAddTable;

const headtable = [
  "ID",
  "Name & Email",
  "Role",
  "Brand",
  "Outlet",
  "Department",
  "Created Date",
  "Status",
  "Actions",
];
