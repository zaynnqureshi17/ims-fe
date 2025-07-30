import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const UserEditTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Users", href: ProtectedUrls.common.manageUsers },
    { label: "Add New User", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default UserEditTopBar;
