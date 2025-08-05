import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const ItemReceivingAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Item", href: ProtectedUrls.common.manageItemReceiving },
    { label: "Add Item", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default ItemReceivingAddTopBar;
