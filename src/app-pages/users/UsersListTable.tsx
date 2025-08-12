"use client";
import { useUserContext } from "@/context/UserContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import UsersTable from "./UsersTable";

const UsersListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { user, loading } = useUserContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEditUser = (userId: number) => {
    navigate(ProtectedUrls.common.editUser.replace(":id", String(userId)));
  };

  const handleDeleteUser = () => {
    // TODO
    console.log("Delete user action triggered");
  };

  const handleViewUser = (userId: number) => {
    navigate(ProtectedUrls.common.viewUser.replace(":id", String(userId)));
  };

  return (
    <UsersTable
      user={user}
      onEdit={handleEditUser}
      onDelete={handleDeleteUser}
      onView={handleViewUser}
    />
  );
};

export default memo(UsersListTable);
