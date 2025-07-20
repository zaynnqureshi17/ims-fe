import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const AdminDashboardTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Dashboard" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default AdminDashboardTopBar;
