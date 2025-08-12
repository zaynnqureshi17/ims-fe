"use client";
import UsersListTable from "@/components/table/users/UsersListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { IUser } from "@/utils/types/user.type";
import { useState } from "react";

interface UsersTableProps {
  user: IUser[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const UsersTable = ({ user, onEdit, onDelete, onView }: UsersTableProps) => {
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
        UsersData={user || UsersData}
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
const UsersData: IUser[] = [
  {
    user_id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role_name: "Admin",
    outlet_name: "Downtown Branch",
    department_name: "Sales",
    brand_name: "Brand A",
    created_at: "2023-01-01",
    status: "Active",
  },
  {
    user_id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role_name: "User",
    outlet_name: "Uptown Branch",
    department_name: "Marketing",
    brand_name: "Brand B",
    created_at: "2023-01-02",
    status: "Inactive",
  },
  {
    user_id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role_name: "User",
    outlet_name: "Downtown Branch",
    department_name: "Engineering",
    brand_name: "Brand C",
    created_at: "2023-01-03",
    status: "Active",
  },
];
