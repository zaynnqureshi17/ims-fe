"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useGetUsersById } from "@/queries/users/useGetUsersById.query";
import { IdProps } from "@/utils/types/common.type";
import UserViewActivity from "./UserViewActivity";
import UserViewHeader from "./UserViewHeader";
import UserViewMain from "./UserViewMain";
import UserViewTopBar from "./UserViewTopBar";

const UserView = ({ id }: IdProps) => {
  const { data: userData, status } = useGetUsersById(id);
  const isLoading = status === "pending";

  return (
    <LoadingWrapper loading={isLoading}>
      <ProtectedLayoutWrapper topBar={<UserViewTopBar />}>
        <UserViewHeader userData={userData?.body?.data} />
        <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UserViewMain userData={userData?.body?.data} />
          <UserViewActivity userData={userData?.body?.data} />
        </GridWrapper>
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default UserView;
