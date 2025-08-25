import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { RecipeProvider } from "@/context/RecipeContext";
import { Suspense } from "react";
import RecipesFilter from "./RecipesFilter";
import RecipesPageHeader from "./RecipesPageHeader";
import RecipesTableList from "./RecipesTableList";
import RecipesTopBar from "./RecipesTopBar";

const Recipes = () => {
  return (
    <RecipeProvider>
      <ProtectedLayoutWrapper topBar={<RecipesTopBar />}>
        <RecipesPageHeader />
        <Suspense fallback={<div>Loading filters...</div>}>
          <RecipesFilter />
        </Suspense>
        <Suspense fallback={<div>Loading filters...</div>}>
          <RecipesTableList />
        </Suspense>
      </ProtectedLayoutWrapper>
    </RecipeProvider>
  );
};

export default Recipes;
