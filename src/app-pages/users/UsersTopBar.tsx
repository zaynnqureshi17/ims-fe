import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const UsersTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Users" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default UsersTopBar;
