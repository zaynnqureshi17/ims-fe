import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import UserAddForm from "./UserAddForm";
import UserAddTopBar from "./UserAddTopBar";

const UserAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<UserAddTopBar />}>
      <PageHeader
        heading="Add New User"
        description="Enter New User information."
      />
      <UserAddForm />
    </ProtectedLayoutWrapper>
  );
};

export default UserAdd;
