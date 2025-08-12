"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetDepartment } from "@/queries/departments/useGetDepartment.query";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import { useGetRoles } from "@/queries/roles/useGetRoles.query";
import { useGetUsersById } from "@/queries/users/useGetUsersById.query";
import UserEditForm from "./UserEditForm";
import UserEditTopBar from "./UserEditTopBar";
import { IdProps } from "@/utils/types/common.type";

const UserEdit = ({ id }: IdProps) => {
  const { data: userData, status } = useGetUsersById(id);
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

  return (
    <LoadingWrapper loading={isLoading}>
      <ProtectedLayoutWrapper topBar={<UserEditTopBar />}>
        <PageHeader
          heading="Edit User"
          description="Update user information."
        />
        <UserEditForm
          userData={userData?.body?.data}
          roleOptions={roleOptions}
          outletOptions={outletOptions}
          departmentOptions={departmentOptions}
        />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default UserEdit;
