import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const UserViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Users", href: ProtectedUrls.common.manageUsers },
    { label: "User Details", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default UserViewTopBar;
