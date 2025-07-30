import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import UsersFilter from "./UsersFilter";
import UsersPageHeader from "./UsersPageHeader";
import UsersTopBar from "./UsersTopBar";
import UsersListTable from "./UsersListTable";

const Users = () => {
  return (
    <ProtectedLayoutWrapper topBar={<UsersTopBar />}>
      <UsersPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <UsersFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <UsersListTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Users;
