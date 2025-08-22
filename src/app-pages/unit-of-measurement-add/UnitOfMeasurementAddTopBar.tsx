import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const UnitOfMeasurementAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: "Unit of Measurement",
      href: ProtectedUrls.admin.manageuom,
    },
    { label: "Add New Unit of Measurement", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default UnitOfMeasurementAddTopBar;
