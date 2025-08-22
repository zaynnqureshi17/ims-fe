import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const StorageEditTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Storage", href: ProtectedUrls.common.manageStorage },
    { label: "Edit Storage", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default StorageEditTopBar;
