import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const BrandViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Brands", href: ProtectedUrls.admin.manageBrands },
    { label: "View Brand", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default BrandViewTopBar;
