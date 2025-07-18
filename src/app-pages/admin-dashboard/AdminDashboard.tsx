import PageHeader from "@/components/page-header";
import AdminDashboardOverViewChart from "./AdminDashboardOverViewChart";
import AdminDashboardRecentSystemActivities from "./AdminDashboardRecentSystemActivities";
import AdminDashboardRoleSetting from "./AdminDashboardRoleSetting";
import AdminDashboardStat from "./AdminDashboardStat";
import AdminDashboardTopBar from "./AdminDashboardTopBar";
import AdminDashboradAlertBox from "./AdminDashboradAlertBox";

export const AdminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminDashboardTopBar />
      <main className="px-6 py-3">
        <PageHeader
          heading="Admin Dashboard"
          description="Manage your admin settings and view analytics."
        />
        <AdminDashboradAlertBox />
        <AdminDashboardStat />
        <AdminDashboardOverViewChart />
        <AdminDashboardRoleSetting />
        <AdminDashboardRecentSystemActivities />
      </main>
    </div>
  );
};
