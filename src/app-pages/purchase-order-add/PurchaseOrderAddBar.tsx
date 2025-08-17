import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const PurchaseOrderAddBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Purchase Order" },
    { label: "Add PO", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default PurchaseOrderAddBar;
