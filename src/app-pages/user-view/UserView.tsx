import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import UserViewActivity from "./UserViewActivity";
import UserViewHeader from "./UserViewHeader";
import UserViewMain from "./UserViewMain";
import UserViewTopBar from "./UserViewTopBar";

const UserView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<UserViewTopBar />}>
      <UserViewHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UserViewMain />
        <UserViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default UserView;
