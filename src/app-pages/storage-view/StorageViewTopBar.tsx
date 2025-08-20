import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const StorageViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Stock Count", href: ProtectedUrls.admin.manageSuppliers },
    { label: "Storage Details", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default StorageViewTopBar;
