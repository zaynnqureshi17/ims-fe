import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const OutletAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Outlets", href: ProtectedUrls.admin.manageOutlets },
    { label: "Add New Outlet", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default OutletAddTopBar;
