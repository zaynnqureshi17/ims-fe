"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useGetUsersById } from "@/queries/users/useGetUsersById.query";
import { IdProps } from "@/utils/types/common.type";
import UserViewActivity from "./UserViewActivity";
import UserViewHeader from "./UserViewHeader";
import UserViewMain from "./UserViewMain";
import UserViewTopBar from "./UserViewTopBar";

const UserView = ({ id }: IdProps) => {
  const { data: userData, status, error } = useGetUsersById(id);
  const isError = status === "error";
  const user = userData?.body?.data;
  const isLoading = status === "pending";
  const notFound = !isLoading && !isError && !user;

  return (
    <StateWrapper
      loading={isLoading}
      error={
        isError ? ((error as Error)?.message ?? "Failed to load data") : null
      }
      notFound={notFound}
    >
      {" "}
      <ProtectedLayoutWrapper topBar={<UserViewTopBar />}>
        <UserViewHeader userData={userData?.body?.data} />
        <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UserViewMain userData={userData?.body?.data} />
          <UserViewActivity userData={userData?.body?.data} />
        </GridWrapper>
      </ProtectedLayoutWrapper>
    </StateWrapper>
  );
};

export default UserView;
