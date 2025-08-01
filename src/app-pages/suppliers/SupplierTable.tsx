"use client";
import SupplierListTable, {
  SuppliersDataProps,
} from "@/components/table/supplier/SupplierListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

interface SupplierTableProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const SupplierTable = ({ onEdit, onDelete, onView }: SupplierTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <SupplierListTable
        headtable={headtable}
        UsersData={UsersData}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default SupplierTable;

const headtable = [
  "ID",
  "Name & Email",
  "Category",
  "PIC",
  "Contact",
  "Service Area",
  "Status",
  "Actions",
];

const UsersData: SuppliersDataProps[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    category: "Food",
    PIC: "John Doe",
    contact: "123-456-7890",
    service_area: ["KV", "SU"],
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    category: "Food",
    PIC: "Jane Smith",
    contact: "987-654-3210",
    service_area: ["KV", "SU"],
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    category: "Food",
    PIC: "Alice Johnson",
    contact: "555-123-4567",
    service_area: ["KV", "SU"],
    status: "Active",
  },
];
