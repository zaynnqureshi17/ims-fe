import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const StockCountTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Stock Count" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default StockCountTopBar;
