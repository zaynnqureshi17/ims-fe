import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import RecipesFilter from "./RecipesFilter";
import RecipesPageHeader from "./RecipesPageHeader";
import RecipesTableList from "./RecipesTableList";
import RecipesTopBar from "./RecipesTopBar";

const Recipes = () => {
  return (
    <ProtectedLayoutWrapper topBar={<RecipesTopBar />}>
      <RecipesPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <RecipesFilter />
      </Suspense>
      <Suspense fallback={<div>Loading filters...</div>}>
        <RecipesTableList />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default Recipes;
