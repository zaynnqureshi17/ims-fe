import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const ProductionsTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Productions" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default ProductionsTopBar;
