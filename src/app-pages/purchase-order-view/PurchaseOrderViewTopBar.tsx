import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const PurchaseOrderViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Purchase Order" },
    { label: "PO View", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default PurchaseOrderViewTopBar;
