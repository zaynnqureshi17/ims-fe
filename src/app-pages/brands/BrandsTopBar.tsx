import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const BrandsTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Brand" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default BrandsTopBar;
