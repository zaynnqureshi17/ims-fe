"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetDepartment } from "@/queries/departments/useGetDepartment.query";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import { useGetRoles } from "@/queries/roles/useGetRoles.query";
import { useGetUsersById } from "@/queries/users/useGetUsersById.query";
import { IdProps } from "@/utils/types/common.type";
import UserEditForm from "./UserEditForm";
import UserEditTopBar from "./UserEditTopBar";

const UserEdit = ({ id }: IdProps) => {
  const { data: userData, status, error } = useGetUsersById(id);
  const { data: roles, status: roleStatus } = useGetRoles();
  const { data: departments, status: departmentStatus } = useGetDepartment();
  const { data: outlets, status: outletStatus } = useGetOutlets({});

  const { roleOptions, outletOptions, departmentOptions } = useMultiOptions({
    roles: roles?.body?.roles,
    outlets: outlets?.body?.data,
    departments: departments?.body?.departments,
  });

  const isLoading =
    status === "pending" ||
    roleStatus === "pending" ||
    outletStatus === "pending" ||
    departmentStatus === "pending";

  const user = userData?.body?.data;
  const isError = status === "error";
  const notFound = !isLoading && !isError && !user;

  return (
    <ProtectedLayoutWrapper topBar={<UserEditTopBar />}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        <PageHeader
          heading="Edit User"
          description="Update user information."
        />
        <UserEditForm
          userData={user}
          roleOptions={roleOptions}
          outletOptions={outletOptions}
          departmentOptions={departmentOptions}
        />
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default UserEdit;
