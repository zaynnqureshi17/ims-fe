import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const StorageEditTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Stock Count", href: ProtectedUrls.common.manageStockCount },
    { label: "Edit Storage", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default StorageEditTopBar;
