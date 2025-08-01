import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const SupplierViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Suppliers", href: ProtectedUrls.admin.manageSuppliers },
    { label: "Supplier Details", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default SupplierViewTopBar;
