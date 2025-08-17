import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const SalesReportTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Sales" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default SalesReportTopBar;
