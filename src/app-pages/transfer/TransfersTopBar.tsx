import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const TransfersTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Recipes" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default TransfersTopBar;
