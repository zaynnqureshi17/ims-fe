import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const TransferViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Transfers", href: ProtectedUrls.common.manageTransfers },
    { label: "Transfer Details", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default TransferViewTopBar;
