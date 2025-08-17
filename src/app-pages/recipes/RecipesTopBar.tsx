import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const RecipesTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Recipes" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default RecipesTopBar;
