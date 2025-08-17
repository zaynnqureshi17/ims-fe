import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const PurchaseOrderBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Purchase Order" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default PurchaseOrderBar;
