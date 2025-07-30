"use client";
import UsersListTable, {
  UsersDataProps,
} from "@/components/table/users/UsersListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

interface UsersTableProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const UsersTable = ({ onEdit, onDelete, onView }: UsersTableProps) => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <UsersListTable
        headtable={headtable}
        UsersData={UsersData}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </TableWrapper>
  );
};

export default UsersTable;

const headtable = [
  "ID",
  "Name & Email",
  "Role",
  "Outlet",
  "Department",
  "Created Date",
  "Status",
  "Actions",
];

const UsersData: UsersDataProps[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    outlet: "Downtown Branch",
    department: "Sales",
    created_date: "2023-01-01",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    outlet: "Uptown Branch",
    department: "Marketing",
    created_date: "2023-01-02",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "User",
    outlet: "Downtown Branch",
    department: "Engineering",
    created_date: "2023-01-03",
    status: "Active",
  },
];
