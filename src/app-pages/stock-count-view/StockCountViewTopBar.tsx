import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const StockCountViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Stock Count", href: ProtectedUrls.common.manageStockCount },
    { label: "Stock Count Details", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default StockCountViewTopBar;
