import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";
import { ProtectedUrls } from "@/utils/urls/urls";

const RecipeViewTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Recipes", href: ProtectedUrls.common.manageRecipes },
    { label: "Recipe Details", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default RecipeViewTopBar;
