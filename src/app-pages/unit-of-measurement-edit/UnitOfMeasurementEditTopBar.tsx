import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const UnitOfMeasurementEditTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Units of Measurement", href: ProtectedUrls.admin.manageOutlets },
    { label: "Edit Unit of Measurement", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default UnitOfMeasurementEditTopBar;
