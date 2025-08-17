import { BreadcrumbItem } from "@/components/breadcrumbs/breadcrumbs";
import TopBar from "@/components/topbar";

const RecipeAddTopBar = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Recipes", href: "/recipes" },
    { label: "Add Recipe", active: true },
  ];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default RecipeAddTopBar;
