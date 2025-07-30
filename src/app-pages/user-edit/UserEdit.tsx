import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import UserEditForm from "./UserEditForm";
import UserEditTopBar from "./UserEditTopBar";

const UserEdit = () => {
  return (
    <ProtectedLayoutWrapper topBar={<UserEditTopBar />}>
      <PageHeader heading="Edit User" description="Update user information." />
      <UserEditForm />
    </ProtectedLayoutWrapper>
  );
};

export default UserEdit;
