import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const SupplierAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Suppliers", href: ProtectedUrls.admin.manageSuppliers },
    { label: "Add New Supplier", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default SupplierAddTopBar;
