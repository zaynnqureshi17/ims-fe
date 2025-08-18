"use client";
import WasteListTable from "@/components/table/waste/WasteListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IWaste } from "@/utils/types/waste.type";
import { useState } from "react";

interface WasteTableProps {
  waste: IWaste[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const WasteTable = ({ waste, onEdit, onDelete, onView }: WasteTableProps) => {
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

export default WasteTable;

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
