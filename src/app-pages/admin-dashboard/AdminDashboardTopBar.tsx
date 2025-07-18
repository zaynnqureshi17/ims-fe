import TopBar from "@/components/topbar";

const AdminDashboardTopBar = () => {
  const breadcrumbs = [{ label: "Dashboard" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default AdminDashboardTopBar;
