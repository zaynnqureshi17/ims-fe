import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const ReportTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Reports" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default ReportTopBar;
