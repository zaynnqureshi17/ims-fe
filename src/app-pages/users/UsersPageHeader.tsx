"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { memo } from "react";

const UsersPageHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleAddUser = () => {
    navigate(ProtectedUrls.common.addUser);
  };
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Users"
        description="Manage all your restaurant users and their configurations."
      />
      <div className="flex justify-end items-end">
        <Button variant="secondary" className="w-auto" onClick={handleAddUser}>
          Add User
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(UsersPageHeader);
