import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const StockCountAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Stock Count", href: ProtectedUrls.common.manageStockCount },
    { label: "Add Storage", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default StockCountAddTopBar;
