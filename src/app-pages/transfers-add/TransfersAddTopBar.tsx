import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const TransfersAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Transfers", href: "/transfers" },
    { label: "Add Transfer", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default TransfersAddTopBar;
