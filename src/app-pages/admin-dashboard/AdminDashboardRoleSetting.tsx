import GridWrapper from "@/components/wrapper/GridWrapper";
import AdminDashboardGlobalSetting from "./AdminDashboardGlobalSetting";
import AdminDashboardRoleManagment from "./AdminDashboardRoleManagment";

const AdminDashboardRoleSetting = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <AdminDashboardRoleManagment />
      <AdminDashboardGlobalSetting />
    </GridWrapper>
  );
};

export default AdminDashboardRoleSetting;
