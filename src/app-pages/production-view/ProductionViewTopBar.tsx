import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const ProductionViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Production", href: ProtectedUrls.common.manageProduction },
    { label: "Production Details", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default ProductionViewTopBar;
