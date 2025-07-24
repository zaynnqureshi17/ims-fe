import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const OutletEditTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Outlets", href: ProtectedUrls.admin.manageOutlets },
    { label: "Edit Outlet", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default OutletEditTopBar;
