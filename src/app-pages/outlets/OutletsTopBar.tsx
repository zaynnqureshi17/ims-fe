import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const OutletsTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Outlet" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default OutletsTopBar;
