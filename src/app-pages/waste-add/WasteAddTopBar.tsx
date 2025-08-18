import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const WasteAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Waste", href: "/waste" },
    { label: "Add Waste", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default WasteAddTopBar;
