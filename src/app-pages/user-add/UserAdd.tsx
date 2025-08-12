"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetDepartment } from "@/queries/departments/useGetDepartment.query";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import { useGetRoles } from "@/queries/roles/useGetRoles.query";
import UserAddForm from "./UserAddForm";
import UserAddTopBar from "./UserAddTopBar";

const UserAdd = () => {
  const { data: roles, status: roleStatus } = useGetRoles();
  const { data: outlets, status: outletStatus } = useGetOutlets({});
  const { data: departments, status: departmentStatus } = useGetDepartment();
  const { roleOptions, outletOptions, departmentOptions } = useMultiOptions({
    roles: roles?.body?.roles,
    outlets: outlets?.body?.data,
    departments: departments?.body?.departments,
  });

  const isLoading =
    roleStatus === "pending" ||
    outletStatus === "pending" ||
    departmentStatus === "pending";

  return (
    <LoadingWrapper loading={isLoading}>
      <ProtectedLayoutWrapper topBar={<UserAddTopBar />}>
        <PageHeader
          heading="Add New User"
          description="Enter New User information."
        />
        <UserAddForm
          roleOptions={roleOptions}
          outletOptions={outletOptions}
          departmentOptions={departmentOptions}
        />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default UserAdd;
