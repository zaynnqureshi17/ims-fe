import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const StorageTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Stock Count" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default StorageTopBar;
