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
      totalItems={user.length > 0 ? user.length : 0}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <UsersListTable
        headtable={headtable}
        UsersData={user}
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
  "Brand",
  "Outlet",
  "Department",
  "Created Date",
  "Status",
  "Actions",
];
