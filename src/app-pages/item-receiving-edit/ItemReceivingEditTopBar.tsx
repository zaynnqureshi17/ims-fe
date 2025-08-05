import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const ItemReceivingEditTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Item", href: ProtectedUrls.common.manageItemReceiving },
    { label: "Edit Item", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default ItemReceivingEditTopBar;
