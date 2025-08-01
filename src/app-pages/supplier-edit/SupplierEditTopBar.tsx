import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const SupplierEditTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Suppliers", href: ProtectedUrls.admin.manageSuppliers },
    { label: "Edit Supplier", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default SupplierEditTopBar;
