import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const UnitOfMeasurementTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Unit of Measurement" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default UnitOfMeasurementTopBar;
