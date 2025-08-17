import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const CatalogueTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Catalogue" },
    { label: "For Order", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default CatalogueTopBar;
