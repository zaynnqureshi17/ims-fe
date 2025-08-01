import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const SuppliersTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Suppliers" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default SuppliersTopBar;
