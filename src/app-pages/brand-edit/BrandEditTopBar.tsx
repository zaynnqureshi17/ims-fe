import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const BrandEditTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Brands", href: ProtectedUrls.admin.manageBrands },
    { label: "Edit Brand", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default BrandEditTopBar;
