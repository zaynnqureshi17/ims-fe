"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import RecipesViewPageHeader from "./RecipesViewPageHeader";
import RecipeViewActivity from "./RecipeViewActivity";
import RecipeViewMain from "./RecipeViewMain";
import RecipeViewTopBar from "./RecipeViewTopBar";

const RecipeView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<RecipeViewTopBar />}>
      <RecipesViewPageHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RecipeViewMain />
        <RecipeViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default RecipeView;
