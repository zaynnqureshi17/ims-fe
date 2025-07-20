import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const OutletManagerTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Dashboard" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default OutletManagerTopBar;
