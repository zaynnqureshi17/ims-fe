import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { UserProvider } from "@/context/UserContext";
import { Suspense } from "react";
import UsersFilter from "./UsersFilter";
import UsersListTable from "./UsersListTable";
import UsersPageHeader from "./UsersPageHeader";
import UsersTopBar from "./UsersTopBar";

const Users = () => {
  return (
    <UserProvider>
      <ProtectedLayoutWrapper topBar={<UsersTopBar />}>
        <UsersPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <UsersFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <UsersListTable />
        </Suspense>
      </ProtectedLayoutWrapper>
    </UserProvider>
  );
};

export default Users;
