import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const ProductionAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Production", href: ProtectedUrls.common.manageProduction },
    { label: "Add Production", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default ProductionAddTopBar;
