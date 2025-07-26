import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import AdminDashboardOverViewChart from "./AdminDashboardOverViewChart";
import AdminDashboardRecentSystemActivities from "./AdminDashboardRecentSystemActivities";
import AdminDashboardRoleSetting from "./AdminDashboardRoleSetting";
import AdminDashboardStat from "./AdminDashboardStat";
import AdminDashboardTopBar from "./AdminDashboardTopBar";
import AdminDashboradAlertBox from "./AdminDashboradAlertBox";

export const AdminDashboard = () => {
  return (
    <ProtectedLayoutWrapper topBar={<AdminDashboardTopBar />}>
      <PageHeader
        heading="Admin Dashboard"
        description="Manage your admin settings and view analytics."
      />
      <AdminDashboradAlertBox />
      <AdminDashboardStat />
      <AdminDashboardOverViewChart />
      <AdminDashboardRoleSetting />
      <AdminDashboardRecentSystemActivities />
    </ProtectedLayoutWrapper>
  );
};
