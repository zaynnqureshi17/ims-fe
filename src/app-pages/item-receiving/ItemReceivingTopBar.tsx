import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const ItemReceivingTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Item Receiving" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default ItemReceivingTopBar;
