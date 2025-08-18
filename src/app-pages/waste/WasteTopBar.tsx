import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const WasteTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Waste" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default WasteTopBar;
