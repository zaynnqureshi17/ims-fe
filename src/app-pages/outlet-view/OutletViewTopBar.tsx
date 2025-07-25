import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const OutletViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Outlet", href: ProtectedUrls.admin.manageOutlets },
    { label: "View Outlet", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default OutletViewTopBar;
