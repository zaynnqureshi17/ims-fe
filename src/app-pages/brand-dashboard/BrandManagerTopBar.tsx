import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const BrandManagerTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Dashboard" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default BrandManagerTopBar;
